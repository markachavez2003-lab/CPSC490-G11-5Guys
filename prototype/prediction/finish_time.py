import math


# Predict the total finish time in minutes
def predict_finish_time(current_pace, distance_completed,
                        elapsed_minutes, race_distance=26.2,
                        past_paces=None):

    # Check for invalid race information
    if not all(math.isfinite(x) for x in
               [distance_completed, elapsed_minutes, race_distance]):
        return None

    if (race_distance <= 0 or distance_completed < 0
            or distance_completed > race_distance
            or elapsed_minutes < 0):
        return None

    # Calculate the remaining distance
    remaining_distance = race_distance - distance_completed

    if remaining_distance == 0:
        return elapsed_minutes

    paces = []

    if current_pace is not None:
        if math.isfinite(current_pace) and current_pace > 0:
            paces.append(current_pace)

    # Calculate average historical pace
    if past_paces:
        valid_paces = [
            pace for pace in past_paces
            if pace is not None and math.isfinite(pace) and pace > 0
        ]

        if valid_paces:
            paces.append(sum(valid_paces) / len(valid_paces))

    # Return no prediction if pace data is missing
    if not paces:
        return None

    # Combine current and historical pace
    estimated_pace = sum(paces) / len(paces)

    # Estimate total race time
    return elapsed_minutes + estimated_pace * remaining_distance


# Calculate prediction error as a percentage
def calculate_prediction_error(predicted_time, actual_time):
    if predicted_time is None or actual_time is None:
        return None

    if (not math.isfinite(predicted_time)
            or not math.isfinite(actual_time)
            or predicted_time < 0 or actual_time <= 0):
        return None

    return abs(predicted_time - actual_time) / actual_time * 100