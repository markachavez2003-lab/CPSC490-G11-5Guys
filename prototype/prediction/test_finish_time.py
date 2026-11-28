import unittest
from finish_time import predict_finish_time, calculate_prediction_error


class TestFinishTime(unittest.TestCase):

    # Test prediction using current pace
    def test_current_pace(self):
        result = predict_finish_time(10, 10, 100)
        self.assertAlmostEqual(result, 262.0)

    # Test prediction using current and past pace
    def test_past_pace(self):
        result = predict_finish_time(
            10, 10, 100, past_paces=[8, 9]
        )
        self.assertAlmostEqual(result, 249.85)

    # Test prediction using only past pace
    def test_missing_current_pace(self):
        result = predict_finish_time(
            None, 0, 0, past_paces=[10]
        )
        self.assertAlmostEqual(result, 262.0)

    # Test missing pace data
    def test_missing_data(self):
        result = predict_finish_time(None, 10, 100)
        self.assertIsNone(result)

    # Test invalid distance
    def test_invalid_distance(self):
        result = predict_finish_time(10, -1, 100)
        self.assertIsNone(result)

    # Test a completed race
    def test_completed_race(self):
        result = predict_finish_time(10, 26.2, 260)
        self.assertEqual(result, 260)

    # Test percentage error
    def test_prediction_error(self):
        error = calculate_prediction_error(260, 250)
        self.assertAlmostEqual(error, 4.0)

    # Test invalid actual finish time
    def test_invalid_actual_time(self):
        error = calculate_prediction_error(260, 0)
        self.assertIsNone(error)


if __name__ == "__main__":
    unittest.main()