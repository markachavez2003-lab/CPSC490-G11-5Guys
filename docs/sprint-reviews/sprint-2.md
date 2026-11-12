# Sprint 2 review — Oct 15 – Oct 28

## Progress this sprint — the substance

This is what the sprint's 5% is assessed on. Be concrete and link things.

**Proposal moved:**
| Section | What changed | Where |
|---|---|---|
| §1.2 Problem statements | Problem statements were added to describe the issues this project intends to solve, which include tracking, communication, and prediction. | #37, PR #35 (P3 reached main via PR #39) |
| §2 Goals & Objectives | We described the requirements that our application needed using measurable goals and objectives. | #3, PR #36 (goals: epics #4, #26, #27; objectives: stories #28–#33) |
| §8 references / develop → main | We merged develop into main, which brought our previously unseen changes into the main branch that is evaluated for grading, and fixed the §8 references. | #38, PR #39 |
| §3 + §4 Tech stack | We determined the tools we plan on using to develop the project which include React Native and Expo, Firebase, and Mapbox. | #48, PR #51 |
| §4 work-item links | Here we corrected the bare #13 reference and linked the Sprint 2 tasks. | #42, PR #52 |
| docs/specs/live-runner-tracking.md | We created a new Goal 1 specification (epic #4) covering the GPS location being updated every 5 seconds on the public-facing page. | #43, PR #57 |
| docs/specs/posts-and-shareable-page.md | We created a new Goal 2 specification (epic #26) to show posts at different mile markers, with a limit of 100 characters and a single image, displayed on the public-facing page. These posts must also update within 10 seconds. | #44, PR #54 |
| docs/specs/race-time-prediction.md | We created a new Goal 3 specification (epic #27) to calculate race time predictions using current and past runs as data. | #45, PR #53 |
| docs/design/data-model.md | Here we created diagrams that show how the data is managed in the system. | #47, PR #50 |

The tasks for #37 and #3 were finished in Sprint 2, although they were started in Sprint 1, because the content sat in the develop branch instead of being merged into the main branch. In addition, PR #36 was not made until the second sprint, meaning those changes were not pushed until Sprint 2. This meant that by the deadline the changes were not technically finished, since the main branch is where grading takes place.

**Prototype moved (#49, PR #56):** The prototype application is a React Native + Expo project which was able to successfully launch an npm server through terminal commands. This prototype did not contain any connection to Firebase or Mapbox, which made this a skeleton of our intended final project.

## Velocity

| | Story points | Stories |
|---|---|---|
| Planned | 4 | 0 (8 tasks) |
| Completed | 4 | 0 (8 tasks) |


## Completed (merged PRs)

| Story | Owner | Points | PR |
|---|---|---|---|
| #38 Merge develop into main and resolve §8 references | @markachavez2003-lab | 1 | #39 |
| #42 Fix bare #13 ref and link Sprint 2 tasks in §4 | @markachavez2003-lab | 1 | #52 |
| #43 Write Goal 1 specification | @markachavez2003-lab | — | #57 |
| #44 Write Goal 2 specification | @Card1n | — | #54 |
| #45 Write Goal 3 specification | @robertocovarrubias24 | — | #53 |
| #47 Draw data flow, ER, and screen flow diagrams | @lcontreras18 | — | #50 |
| #48 Write tech stack in proposal §3 and §4 | @Card1n | 2 | #51 |
| #49 Set up prototype skeleton | @robertocovarrubias24 | — | #56 |

## Carried over — and why

| Story | Owner | Why not finished | Decision |
|---|---|---|---|
| #46 Draw architecture, context, and sequence diagrams | @basikgoalz | For this task we had a few problems that prevented the issue from closing. First, PR #55 was merged into develop, not main, meaning the issue was never closed. In addition, it seemed as though the work was done, since the sprint board card was manually moved to Done, which was supposed to be handled by merging into main. | We decided to roll the work over to the Sprint 3 milestone to bring the diagrams into main. |

## Loop health (docs/aidlc/loop-engineering.md §8)

| | This sprint |
|---|---|
| Iterations to green, average per PR | 1.3 |
| Harness rules added (rows in the harness log) | 0 |

Our group seemed to improve in terms of avoiding CI failures, as fewer problems came up after we became more familiar with the process. However, we only recently wrote our specs, so it will take more time to determine how often the code fails to meet those requirements.

## Prototype increment

At the end of the second sprint we had built out a skeleton of our application with React Native + Expo. Moreover, this skeleton was tested by launching the dev server, which worked correctly. These were done in #49 and PR #56.

## Feedback we received, and what we did about it

Every item of feedback from the instructor, the sponsor, or a reviewer gets a
row. "We were told and did nothing" is a legitimate row — with a reason.

| Feedback (source) | What we changed | Issue / PR |
|---|---|---|
|  (professor) save work in main instead of develop | We moved leftover work from develop into main and now our team works by merging directly into main instead of develop. | #38 / PR #39 |
| (professor) make objectives measurable | We added measurable objectives such as updating position every 5 seconds and having posts visible within 10 seconds. We also changed Goal 3 from Machine Learning to Race Time Prediction. | #3 / PR #36 |
| (professor) move tech stack to §4 Environment and resources, one reason per tool, §3 in own words | The tech stack now resides in §4 of the proposal on the main branch. However, the rest of the feedback was not finished and was rolled over to issues in Sprint 3. | #48 / PR #51 → #72, #65 |


## Contribution snapshot

Three metrics the team chose, per member. Not a grade — a conversation
starter, and an early warning the team can act on itself.

| Member | Meetings attended | Merged PRs | Issues closed | Reviews given |
|---|---|---|---|---|
| @markachavez2003-lab | 2/2 | 4 (#36, #39, #52, #57) | 3 (#38, #42, #43) | 6 (#35, #50, #51, #53, #54, #56) |
| @robertocovarrubias24 | 2/2 | 4 (#35, #41, #53, #56) | 2 (#45, #49) | 2 (#36, #39) |
| @Card1n | 2/2 | 2 (#51, #54) | 2 (#44, #48) | 3 (#41, #52, #55) |
| @lcontreras18 | 2/2 | 1 (#50) | 1 (#47) | 0 |
| @basikgoalz | 2/2 | 1 (#55, into develop) | 0 | 3 (#36, #39, #57) |

A couple of our group members were slightly behind the rest in terms of closed issues. In the future, we plan on making sure each individual has an equal workload, while also confirming that their work was properly added to the main branch, as that played a role in these findings.

## What we change next sprint

- We plan on spreading the workload more evenly among each other.
