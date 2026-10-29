
# Specification — Race Time Prediction

Epic: #27 | Stories: #32, #33 | Owner: robertocovarrubias24 | Sprint: 2 | Status: draft

## Scope

**In scope:** The marathon tracking app will estimate a runner's pace using information from current and previous runs. It will also use pace information to predict the runner's estimated finish time. The app should update the runner's displayed pace every 10 seconds and aim for a finish-time prediction within a 5% margin of error.

**Out of scope:** Predicting race results for other runners, providing training recommendations, and guaranteeing an exact finish time.

## Functional requirements

| ID | Requirement | Story |
|---|---|---|
| FR-1 | When a runner has recorded pace data from a current run, the system shall calculate the runner's pace. | #32 |
| FR-2 | When previous run data is available, the system shall use it along with current run data to estimate the runner's pace. | #32 |
| FR-3 | While a run is being tracked and sufficient data is available, the system shall update the displayed pace every 10 seconds. | #32 |
| FR-4 | When a runner's pace and race distance are available, the system shall calculate an estimated finish time. | #33 |
| FR-5 | When the runner's pace changes, the system shall update the predicted finish time using the latest available pace information. | #33 |

## Non-functional requirements

| ID | Requirement | Why it matters here |
|---|---|---|
| NFR-1 | The system should update the displayed pace at least once every 10 seconds while tracking is active and data is available. | Keeps the runner's pace information current. |
| NFR-2 | The prediction feature should aim for a finish-time error of no more than 5% under the team's agreed evaluation method. | Supports the accuracy target in Objective 3.2. |
| NFR-3 | The system should handle missing or incomplete run data without crashing. | GPS readings and historical run records may not always be available. |
| NFR-4 | The prediction feature should be testable using sample run data. | Allows the team to evaluate the feature before a live race. |

## Acceptance criteria (epic level)

- [ ] The system calculates a runner's pace using current run data.
- [ ] The system uses previous run data when it is available.
- [ ] The displayed pace updates every 10 seconds while tracking is active and sufficient data is available.
- [ ] The system produces an estimated finish time using the runner's pace and race distance.
- [ ] The team evaluates finish-time predictions against the 5% error target using an agreed testing method.
- [ ] The feature handles missing run data without crashing.
- [ ] The repository checks and relevant prototype tests pass.

## Open questions

| Question | Owner | Needed by |
|---|---|---|
| What calculation or prediction model will be used to estimate finish times? | Team | Before implementation |
| How much previous run data should be used to calculate pace? | Team | Before implementation |
| How will the team measure the 5% margin of error against previous races? | Team | Before testing |
| How should the app respond when GPS data is missing or delayed? | Team | Before implementation |
| How will the Python prediction component communicate with the mobile app and Firebase? | Team | Before integration |
