from finish_time import predict_finish_time, calculate_prediction_error

# Simulated race data for preliminary testing
sample_races = [
    {
        "name": "Sample Race 1",
        "current_pace": 9.5,
        "distance_completed": 10,
        "elapsed_minutes": 95,
        "past_paces": [9.8, 10.0],
        "actual_time": 258
    },
    {
        "name": "Sample Race 2",
        "current_pace": 10.5,
        "distance_completed": 13,
        "elapsed_minutes": 136.5,
        "past_paces": [10.0, 10.2],
        "actual_time": 280
    },
    {
        "name": "Sample Race 3",
        "current_pace": 8.5,
        "distance_completed": 15,
        "elapsed_minutes": 127.5,
        "past_paces": [8.2, 8.4],
        "actual_time": 225
    }
]

# Evaluate each sample race
for race in sample_races:
    predicted = predict_finish_time(
        current_pace=race["current_pace"],
        distance_completed=race["distance_completed"],
        elapsed_minutes=race["elapsed_minutes"],
        past_paces=race["past_paces"]
    )

    error = calculate_prediction_error(
        predicted, race["actual_time"]
    )

    print(race["name"])
    print(f"Predicted time: {predicted:.2f} minutes")
    print(f"Actual time: {race['actual_time']} minutes")
    print(f"Prediction error: {error:.2f}%")

    if error <= 5:
        print("Result: PASS")
    else:
        print("Result: FAIL")

    print()