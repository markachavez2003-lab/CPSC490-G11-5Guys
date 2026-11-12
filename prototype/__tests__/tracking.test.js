// Tests for live GPS tracking (#59), one per acceptance criterion in #59:
//   AC1 - a button starts and stops tracking (Goal 1 spec, criterion 1)
//   AC2 - position written to Firestore every 5 seconds while tracking
// The phone's GPS and Firestore are replaced with fakes so CI needs no phone.
import * as Location from 'expo-location';
import { addDoc } from 'firebase/firestore';
import {
  createTracker,
  INTERVAL_MS,
  startTracking,
  stopTracking,
} from '../runner-app/tracking';

jest.mock('expo-location', () => ({
  requestForegroundPermissionsAsync: jest.fn(),
  getCurrentPositionAsync: jest.fn(),
  Accuracy: { High: 4 },
}));
jest.mock('firebase/firestore', () => ({
  addDoc: jest.fn(() => Promise.resolve()),
  collection: jest.fn((db, name) => name),
}));
jest.mock('../firebase/client', () => ({ db: {} }));

const FAKE_POSITION = {
  coords: { latitude: 33.8823, longitude: -117.8851 },
  timestamp: Date.UTC(2026, 10, 11, 18, 0, 0),
};

beforeEach(() => {
  jest.useFakeTimers();
  jest.clearAllMocks();
  Location.requestForegroundPermissionsAsync.mockResolvedValue({ status: 'granted' });
  Location.getCurrentPositionAsync.mockResolvedValue(FAKE_POSITION);
});

afterEach(() => {
  jest.useRealTimers();
});

describe('AC1: the button starts and stops tracking', () => {
  test('first press starts tracking, second press stops it', async () => {
    const tracker = createTracker('run-1');
    expect(tracker.isTracking()).toBe(false);

    expect(await tracker.toggle()).toBe(true);
    expect(tracker.isTracking()).toBe(true);

    expect(await tracker.toggle()).toBe(false);
    expect(tracker.isTracking()).toBe(false);
  });

  test('tracking does not start if location permission is denied', async () => {
    Location.requestForegroundPermissionsAsync.mockResolvedValue({ status: 'denied' });
    const tracker = createTracker('run-1');

    await expect(tracker.toggle()).rejects.toThrow('Location permission was denied');
    expect(tracker.isTracking()).toBe(false);
    expect(addDoc).not.toHaveBeenCalled();
  });
});

describe('AC2: position written to Firestore every 5 seconds while tracking', () => {
  test('saves a LOCATION with the ER-diagram fields as soon as tracking starts', async () => {
    const timer = await startTracking('run-1');

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith('locations', {
      run_id: 'run-1',
      latitude: 33.8823,
      longitude: -117.8851,
      recorded_at: new Date(FAKE_POSITION.timestamp),
    });
    stopTracking(timer);
  });

  test('saves one more position every 5 seconds', async () => {
    expect(INTERVAL_MS).toBe(5000);
    const timer = await startTracking('run-1');

    await jest.advanceTimersByTimeAsync(5000);
    expect(addDoc).toHaveBeenCalledTimes(2);

    await jest.advanceTimersByTimeAsync(10000);
    expect(addDoc).toHaveBeenCalledTimes(4);
    stopTracking(timer);
  });

  test('saves nothing more after tracking is stopped', async () => {
    const tracker = createTracker('run-1');
    await tracker.toggle(); // start: 1 write
    await tracker.toggle(); // stop

    await jest.advanceTimersByTimeAsync(30000);
    expect(addDoc).toHaveBeenCalledTimes(1);
  });
});
