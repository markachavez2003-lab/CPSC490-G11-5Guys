describe("Marathon Tracker Prototype", () => {
  test("calculates a runner's average pace correctly", () => {
    const distanceKm = 5;
    const timeMinutes = 30;

    const averagePace = timeMinutes / distanceKm;

    expect(averagePace).toBe(6);
  });
});

describe('Runner Pace Display', () => {
  test('simulated pace increases after an update', () => {
    const startingPace = 10.0;
    const updatedPace = startingPace + 0.1;

    expect(updatedPace.toFixed(2)).toBe('10.10');
  });
});