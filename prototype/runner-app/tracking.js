// Records the runner's GPS position and saves it to Firestore every 5 seconds.
// Goal 1 spec (docs/specs/live-runner-tracking.md) FR-1, FR-2; issue #59.
import * as Location from 'expo-location';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/client';

export const INTERVAL_MS = 5000;

// Reads the phone's current position once and saves it as one LOCATION
// (fields from the ER diagram in docs/design/data-model.md).
export async function recordPosition(runId) {
  const location = await Location.getCurrentPositionAsync({
    accuracy: Location.Accuracy.High,
  });
  await addDoc(collection(db, 'locations'), {
    run_id: runId,
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    recorded_at: new Date(location.timestamp),
  });
}

// Asks for location permission, saves a position right away,
// then saves one every 5 seconds. Returns the timer so it can be stopped.
export async function startTracking(runId) {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    throw new Error('Location permission was denied');
  }
  await recordPosition(runId);
  return setInterval(() => {
    recordPosition(runId).catch((error) => console.warn(error.message));
  }, INTERVAL_MS);
}

// Stops the 5-second timer, so no more positions are saved.
export function stopTracking(timer) {
  clearInterval(timer);
}

// One run's start/stop switch, used by the button in App.js.
// toggle() starts tracking if it is off and stops it if it is on,
// and returns true while tracking (Goal 1 acceptance criterion 1).
export function createTracker(runId) {
  let timer = null;
  return {
    isTracking: () => timer !== null,
    async toggle() {
      if (timer !== null) {
        stopTracking(timer);
        timer = null;
        return false;
      }
      timer = await startTracking(runId);
      return true;
    },
    stop() {
      if (timer !== null) {
        stopTracking(timer);
        timer = null;
      }
    },
  };
}
