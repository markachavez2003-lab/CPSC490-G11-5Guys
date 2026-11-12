
import unittest
from datetime import datetime, timedelta
from pace import calculate_pace


class TestPaceCalculator(unittest.TestCase):

    # Test a runner traveling about one mile in 10 minutes
    def test_normal_pace(self):
        points = [
            {
                "latitude": 33.8366,
                "longitude": -117.9143,
                "timestamp": datetime(2026, 11, 11, 10, 0)
            },
            {
                "latitude": 33.8366,
                "longitude": -117.8969,
                "timestamp": datetime(2026, 11, 11, 10, 10)
            }
        ]

        pace = calculate_pace(points)
        self.assertAlmostEqual(pace, 10.0, delta=0.2)

    # Test that at least two GPS points are required
    def test_missing_points(self):
        points = [
            {
                "latitude": 33.8366,
                "longitude": -117.9143,
                "timestamp": datetime(2026, 11, 11, 10, 0)
            }
        ]

        with self.assertRaises(ValueError):
            calculate_pace(points)

    # Test that timestamps must increase
    def test_invalid_timestamps(self):
        start = datetime(2026, 11, 11, 10, 0)

        points = [
            {
                "latitude": 33.8366,
                "longitude": -117.9143,
                "timestamp": start
            },
            {
                "latitude": 33.8366,
                "longitude": -117.8969,
                "timestamp": start - timedelta(minutes=1)
            }
        ]

        with self.assertRaises(ValueError):
            calculate_pace(points)


if __name__ == "__main__":
    unittest.main()
