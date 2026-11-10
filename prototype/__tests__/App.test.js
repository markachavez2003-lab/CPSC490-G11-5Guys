describe("Marathon Tracker Prototype", () => {
  test("calculates a runner's average pace correctly", () => {
    const distanceKm = 5;
    const timeMinutes = 30;

    const averagePace = timeMinutes / distanceKm;

    expect(averagePace).toBe(6);
  });
});