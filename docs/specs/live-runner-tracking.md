# Specification — Live Runner Tracking

> Epic: #4 · Stories: #28, #29
> Owner: Marco Chavez · Sprint: 2 · Status: draft

## Scope

**In scope.** Tracking individual runner location using gps from runners phone which is updated every 5 seconds. Position will be displayed through both the runners app and a public webpage. 

**Out of scope.** Login authentication, posts upload and display, race time calculations, and mile markers.

## Functional requirements

| ID | Requirement | Story |
|---|---|---|
| FR-1 | When a runner starts a race the, system shall to track the phone using GPS. | #28 |
| FR-2 | When tracking is started, the system shall have the runner position updated every 5 seconds. | #28 |
| FR-3 | Once a spectator views the public webpage, the system shall display the runners current postion. | #29 |
| FR-4 | While a race is in progress, the system shall have positional data diplayed on a map in both the app and spectator page.| #29 |
| FR-5 | When a race is finished, the system shall stop the race stopping the tracking. | #28 |

## Non-functional requirements

| ID | Requirement | Why it matters here |
|---|---|---|
| NFR-1 | Postional data must be updated within 5 seconds. | This is in order to prevent issues with delay as longer times will cause loss of data and skipped coordinates |
| NFR-2 | Tracking can run in the background |  Background usage will improve the battery life on a single charge |
| NFR-3 | Each website link is specific to an specific runner | This will urls are shared to specific individuals protecting the runners privacy from unralted spectators |

## Acceptance criteria (epic level)

- [ ] A runner can press a button in the UI which starts and stops tracking
     
- [ ] The runners current position is visible to spectators 
- [ ] The maps for both the runner and spectator is updated every 5 seconds and includes route and runner postion


## Open questions

| Question | Owner | Needed by |
|---|---|---|
| How will the accuracy of a runners postion be determined| markchavez2003-lab | Sprint 3 |
| How will a loss of connection be handled in live race | markchavez2003-lab | Sprint 3 |

