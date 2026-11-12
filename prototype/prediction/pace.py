
import math
from datetime import datetime


# Calculate the distance between two GPS points in miles
def gps_distance(lat1, lon1, lat2, lon2):
    earth_radius = 3958.8  # Earth's radius in miles

    # Convert degrees to radians
    lat1 = math.radians(lat1)
    lon1 = math.radians(lon1)
    lat2 = math.radians(lat2)
    lon2 = math.radians(lon2)

    # Haversine formula
    dlat = lat2 - lat1
    dlon = lon2 - lon1

    a = (math.sin(dlat / 2) ** 2 +
         math.cos(lat1) * math.cos(lat2) *
         math.sin(dlon / 2) ** 2)

    a = min(1.0, max(0.0, a))
    return 2 * earth_radius * math.asin(math.sqrt(a))


# Calculate average pace using recorded GPS points
def calculate_pace(points):
    if len(points) < 2:
        raise ValueError("At least two GPS points are required")

    total_distance = 0

    for i in range(1, len(points)):
        previous = points[i - 1]
        current = points[i]

        # Make sure timestamps are in the correct order
        if current["timestamp"] <= previous["timestamp"]:
            raise ValueError("Timestamps must be increasing")

        total_distance += gps_distance(
            previous["latitude"],
            previous["longitude"],
            current["latitude"],
            current["longitude"]
        )

    if total_distance == 0:
        raise ValueError("Distance must be greater than zero")

    # Convert elapsed seconds to minutes
    elapsed_seconds = (
        points[-1]["timestamp"] - points[0]["timestamp"]
    ).total_seconds()

    elapsed_minutes = elapsed_seconds / 60

    # Return minutes per mile
    return elapsed_minutes / total_distance


# Sample GPS data for testing
if __name__ == "__main__":
    sample_points = [
        {
            "latitude": 33.8366,
            "longitude": -117.9143,
            "timestamp": datetime(2026, 11, 11, 10, 0, 0)
        },
        {
            "latitude": 33.8366,
            "longitude": -117.8969,
            "timestamp": datetime(2026, 11, 11, 10, 10, 0)
        }
    ]

    pace = calculate_pace(sample_points)
    print(f"Average pace: {pace:.2f} minutes per mile")
