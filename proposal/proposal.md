# Project Proposal — Marathon Tracker App

**Department of Computer Science**
**CPSC 490 Undergraduate Seminar in Computer Science — Proposal for Capstone Project**

**Group 11 — 5 Guys **  Sponsor: independent
Authors: Chavez, Marco (markachavez2003) ,Covarrubias, Roberto (robertocovarrubias24), Castillo, Jaime (basikgoalz), Phan, Cardin (card1n) , Contreras, Luis (lcontreras18)
Date: 2026-09-30
Repository: https://github.com/markachavez2003-lab/CPSC490-G11-5Guys

> **This file is the proposal document, not a README.** Its section numbers,
> titles, and guidance are copied from the course Word template, so it
> converts cleanly for Canvas submission. Write continuous academic prose —
> no task lists, no emoji, no repo jargon.
>
> Each section below opens with the template's own guidance in a quote block.
> **Delete the quote blocks and every 〈bracket〉 before submitting.**
>
> **Getting this into the Word template for Canvas.** The template numbers
> its headings **automatically** (a multilevel list: top-level sections at
> level 1, *Related Work* and *Problem Statements* at level 2). The numbers
> typed below exist so the repo copy is readable and checkable — so when you
> move the text into Word, do not end up with both sets.
>
> The reliable route, and the one most teams should use: **open the course
> template and paste your prose section by section**, leaving Word's own
> numbering to do the numbering. Ten minutes, no surprises.
>
> If you prefer to convert, `pandoc` can do it (install with
> `winget install pandoc`):
>
>     pandoc proposal/proposal.md -o proposal.docx --reference-doc="CPSC 490 Project Proposal Template Fall 2026.docx"
>
> Then in Word: delete the typed `0.` / `1.` / `1.1` prefixes (Word re-adds
> them from the list), and set *Related Work* and *Problem Statements* to the
> template's level-2 heading so they number as 1.1 and 1.2. Check figure
> placement, then submit.
>
> Either way, keep this Markdown copy current — it is what peer review and CI
> can actually read. If your team writes in Word instead, commit the `.docx`
> here as well.

---

## 0. Abstract

> The primary purpose of abstract is to help the reader understand the main
> message of current document (proposal in this case) without reading the
> entire document. Therefore an abstract should include at least one or two
> paragraph of background (or motivation) information for the project, a
> brief description of the problem you are trying to solve in this proposal,
> a proposed ideas or solutions, the significance of your proposed idea
> elaborating why the proposed idea is non-trivial, significant, or
> beneficial in one or two paragraphs, the project goals and outcomes in one
> paragraph, and a brief description of what you will discuss in this
> proposal, giving a brief outline of this document in 1-2 sentences in one
> paragraph. Abstract should not exceed one page. Any abstract exceeded
> one-page limit must be shortened.

Marathon runners rely on GPS devices, such as smartphones and watches, to track routes, distances, and running times. Although existing running apps provide tools for recording and reviewing this information, some of those apps may rely on specialized equipment or features that may increase the cost of entry for runners looking to find more detailed performance analysis. The widespread use of smartphones provides an opportunity to develop a more accessible approach to collecting and analyzing running data.

This project proposes a mobile application that uses GPS data and machine learning to analyze an individual's running performance. The app will record a runner's route and time and use publicly available marathon data, such as routes and performance times, as a baseline for analysis. By comparing an individual's running data with existing performance data, the system will explore methods for identifying more efficient running patterns and routes.

The proposed systen is significant because it combines commonly available smartphone technology with data-driven analysis rather than requiring specialized tracking equipment. The project aims to demonstrate how publicly available marathon data and machine learning techniques can be incorporated into an accessible running application. The outcome of this project will be a functional prototype capable of collecting GPS-based running data, storing performance information, and providing analysis based on the collected and publicly available data.

## 1. Introduction

> Describe the necessary background on the project field to help the reader
> understand the field. Assume the reader has B.S. degree in computer science
> but not necessary knowledgeable in the selected area. You may also briefly
> describe motivation of the project if any.
>
> Specify the problem identified and to be solved in this project, the
> importance or usefulness of the problem solving or project. Further
> describes what makes your proposal different from existing ones.


During a marathon event, runners track their distance and routes through GPS coordinates, with the use of watches and smartphones as tracking devices. These distances play a large role in the way the event takes place, as they determine routes, pacing, mile markers, and event meeting points between the runners and in-person supporters. 

In the modern day, there exist numerous apps which all contain different methods of tracking an individual's path traveled and time. These running apps are usually tailored with individual runners in mind. More often than not, the data recorded is saved, allowing for sharing after the runner has finished.

Moreover, most smartphones contain built-in GPS systems that allow people to walk, drive, and cycle to their areas of interest with high levels of accuracy [1]. This, in conjunction with the ability to create custom software that interacts with databases and online storage, creates the opportunity to build software tailored to runner and supporter engagement.


Problem & Difference
The problem is that the cost to entry for these softwares either cost too much or require proprietary equipment to track where youre running. By using something you have every day, such as a smart phone, we will be able to use GPS data to map routes, store logs, and develop running styles. We plan to implement machine learning into the program somehow to make it stand out, whether to have algorithms optimize running patters, or routes. We plan to have this app be a hub for runners, or just people who exercise. 
 
### 1.1 Related Work

> Describe the related or existing work in detail. This section is like a
> survey on the selected problem or topic.

〈Your survey. Cite with bracketed numbers matching §8 — every reference must
be a source your team has actually read.〉

For our project, we decided to do a marathon tracker app. Now this idea isnt a new idea, but we decided to have our own unique twist to it. There are currently several applications that allow users to track their running routes, distances, and performance using GPS technology. I will go into detail of some popular running apps below with Strava or Alltrails. While these applications share similar tracking features, the similarities stop here. For our app, we focus more on  running performance, route navigation, and user interaction. By going through the features of competitors, we can see how our Marathon Tracker project can provide a different experience for runners and outside viewers.

Strava [2] is a fitness tracking application that allows users to record their running routes, distances, pace, and other performance statistics. One of its focuses are it's social features which let you share completed activities and interacting with other users. Although Strava supports live location sharing through its Beacon feature, our project aims to provide a different experience by allowing runners to create posts during a race that outside viewers can follow through a shared webpage link.

Nike Run Club [3] is another running application that provides GPS tracking and guided training plans. Unlike Strava, Nike Run Club focuses more on helping runners improve through coaching and structured workouts. Our project aims to connect runners with their supporters by allowing them to share updates throughout their runs. We also plan to implement ai models to help users improve their running, allowing for live on the go coaching.

AllTrails [4] is an outdoor navigation application that I have some experience using, and has a unique feature that could be useful to our app. It allows users to discover trails and track their routes using GPS. Alltrails focuses on mapping routes using GPS unlike Strava and Nike Run Club. The cool thing about it however is that since it uses gps, you are able to track where you are even in the wilds without data. It uses a large collection of trails from users to map routes. While we plan on having users contribute their routes, the ability to share locations with others live, and add post is unique to our app. 


| Existing approach | What it does | Pros | Cons | Why ours differs |
|---|---|---|---|---|
| Strava [2] | Tracks GPS routes, running statistics, and social activities. | Strong tracking features, route planning, and community interaction. | Some advanced features require a subscription. |  features require a subscription. | Our app allows runners to create posts during a race that supporters can view through a shared webpage link. |
| Nike Run Club [3] | Tracks runs and provides guided workouts and training plans. | Free training features, GPS tracking, and coaching. | Less focused on customizable data analysis. | Our app focuses on connecting runners with outside viewers through updates posted during a race.|
| AllTrails [4] | Route discovery, GPS navigation, trail information | The ability to be used without cell service using gps | Some navigation features require payment, also less focused on running performance | Our app combines GPS tracking with a webpage where supporters can follow updates from runners during an event. |

While all three of these apps have a broad running app focus, they specialize in different aspects. Our project plans to focuses on allowing runners to create race specific posts that outside viewers can follow through a dedicated webpage.

Our Marathon Tracker project's goal is to address this difference by creating an application that connects runners with their supporters during a race. Runners will be able to record their routes and performance using GPS while also creating posts that provide updates throughout the event. These updates will be accessible to outside viewers through a shared webpage link, allowing friends and family to follow the runner's experience without needing to participate in the race themselves. We also plan to explore machine learning techniques to analyze running performance using publicly available marathon datasets. By combining GPS tracking, runner-generated updates, and data-driven analysis, our project aims to provide an accessible platform for both runners and their supporters.



### 1.2 Problem Statements

**P1: Difficulty tracking runners during marathon events.** During a marathon, it can be difficult for spectators to keep track of a runner's location and progress throughout the race. This becomes especially difficult during larger events where runners are spread out across different parts of the course. As a result, friends and family may have trouble knowing where a runner is or when they might reach a certain location.

**P2: Lack of communication between runners and spectators.** Most running applications focus on tracking an individual's distance, pace, and overall performance. While this information is useful for runners, it does not always provide a way for spectators to stay updated during an ongoing race. This makes it harder for friends and family who cannot attend the event to follow along with a runner's experience.

**P3: Difficulty predicting runner pace and finish time.** Although many apps are able to calculate the average pace of runners for a given race, most apps are unable to determine the variance at each mile. During a race, runners can either slow down or speed up at any point in time throughout the event. Since each mile could differ, most calculations fail to account for changes in pace, meaning predictions based solely on an average pace leave out information on the final time such as time gained or lost.

| Problem | Addressed by |
|---|---|
| P1: Difficulty tracking runners during marathon events | Goal 1: Live Runner Tracking |
| P2: Lack of communication between runners and spectators | Goal 2: Posts and Shareable Web Page |
| P3: Difficulty predicting runner pace and finish time | Goal 3: Race Time Prediction |

## 2. Goals and Objectives

> Describe goals and objectives. Goals are general statements of what you are
> trying to accomplish with the project or problems to solve. Objectives are
> specific, measurable statements of what you want to complete to reach the
> project goals. Most projects have 2-3 goals.
>
> List the objectives for each goal. To write objectives, look at the goal
> statement and list what you need to complete using action words like use
> case names in order to meet the goal.
>
> Note that the goals and objectives in a proposal will be an important
> metric to evaluate whether or not you successfully finished your project
> when you turn in your final project report.

Each **goal** is tracked as an **Epic** issue and each **objective** as a
**User Story** issue in the team repository (see the setup guide's *Epics and user stories* section).
**Every epic and user story in the repository is linked from this section** —
CI gate G8 fails if one exists that this section does not link. That is what
keeps the goals in this document and the work on the board from drifting
apart.

Write each objective the way the guidance above asks — **an action word plus
the measure that says it is done**, not a role-play sentence:

- **Goal 1: Live Runner Tracking** [[epic:#4]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/4)
  - Objective 1.1: Track position during live event using phone, updating the position every 5 seconds. [[story:#28]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/28)
  - Objective 1.2: Display position of runner and route every 5 seconds. [[story:#29]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/29)
- **Goal 2: Posts and Shareable Web Page** [[epic:#26]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/26)
  - Objective 2.1: Allow runners to share posts into public web pages which will contain images and text uploaded by the user at each mile with a limit of 1 photo and 100 characters of text. [[story:#30]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/30)
  - Objective 2.2: Display each post within 10 seconds of user upload. [[story:#31]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/31)
- **Goal 3: Race Time Prediction** [[epic:#27]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/27)
  - Objective 3.1: Determine runner's pace using past and current runs. Pace is shown every 10 seconds. [[story:#32]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/32)
  - Objective 3.2: Predict the finish time of a race within a 5 percent margin of error against previous races. [[story:#33]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/33)

## 3. Proposed Approaches

> Describe your proposed approach to solve the problem, specifying how you
> will achieve the stated goals. List some possible strategies.

〈Your approach — **clear and concise**. State the strategy you chose, the
alternatives you considered, and the reasoning that decided between them.
Think of this as the argument, not the manual: a reader should finish this
section understanding *what* you will do and *why that* rather than the
alternatives.〉

**Keep the details out of this section.** Tooling, platforms, frameworks,
DBMS choices, environment setup, diagrams, and the work breakdown all belong
in §4 (Required Environment, Resources, and Planned Activities). If a
sentence here names a version number, a library, or a configuration, it
probably belongs in §4 — leave a pointer instead ("the implementation stack
is detailed in §4").

〈A few paragraphs, or a short list of candidate strategies with one line of
trade-off each. If it runs past a page, you are writing §4.〉

## 4. Required Environment, Resources, and Planned Activities

> Review the required and available resources and environment to complete
> your project. For example, server, platform, software tools, operating
> systems, DBMS, or any required skills.
>
> Describe the expected activities to achieve the stated goals, e.g.,
> software development process.

〈Your environment, resources, and planned activities.〉

### Data Model and Flow Diagrams

The proposed Marathon Tracker App design is documented
in [Data Model and Flow Design](../docs/design/data-model.md).

Figure 1 shows how GPS data moves from the runner
application through Firebase to the spectator webpage.

Figure 2 shows the relationships between runners,
runs, GPS locations, and posts.

Figure 3 shows how runners and spectators navigate
their respective application screens.

These diagrams represent the proposed design and
may be updated as development progresses.

**Diagrams belong in this section.** Include at minimum a high-level
architecture diagram and a system (context) diagram; add the ER/EER model and
a data-flow diagram where they help the reader understand what you are
building and what it depends on. Draw them with any graphical tool
(Lucidchart, draw.io, Miro, Mermaid, ERDPlus, Figma), keep the authoritative
copies in `docs/design/` with both editable source and exported image, and
reference them here.

〈Number every figure, caption it, and point at it from the prose — "Figure 1
shows the three deployment tiers and the trust boundary between them." A
figure the text never mentions is decoration. See `docs/design/DIAGRAMS.md`
for tools, conventions, and the rule that every box and arrow must be
verified against reality.〉

### Specification and design documents

**Every specification and design document the team writes is listed here**
with the objective it serves. This section is the index of the project's
technical detail: §3 holds the argument, §4 holds the documents that make it
buildable. CI gate G9 fails if a document exists in `docs/specs/` or
`docs/design/` that this section does not link.

| Document | Kind | Covers | Issues |
|---|---|---|---|
| 〈docs/specs/account-management.md〉 | specification | 〈account management requirements〉 | 〈#n, #n〉 |
| 〈docs/design/architecture.md〉 | design | 〈system architecture + data model〉 | 〈#n〉 |
| [Data Model and Flow Design](../docs/design/data-model.md) | design | GPS data flow, runner data model, and screen navigation | #47 |


〈The scaffold ships `docs/specs/example-spec.md` and
`docs/design/example-design.md` as worked examples — read them, then delete
them once you have your own, and list yours here.〉

〈Replace these rows with your own. Each document names its epic and stories
in its own first lines too (gate G2), so the trail runs both ways.〉

### Planned activities — the work items

The goals and objectives live in §2 as epics and user stories. **This section
links every *other* work item: features, enhancements, bugs, tasks, and
sub-tasks** — the concrete activities that deliver those objectives. CI gate
G8 fails if such an issue exists that this section does not link.

HEAD
**Specifications.** We will define the live runner tracking, posts, sharable web page link, and the race prediction. This will be done in sprint 2. This design will deliver testable requirements for the tools used to link these goals together. [[task:#43]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/43) [[task:#44]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/44) [[task:#45]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/45)
 origin/main

**Design Diagrams.** We will create diagrams showing the architecture of the system as a whole. This will include how data is wrangled saved and displayed. This will be done in sprint 2. These diagrams will deliver a visual representation of the backend design. [[task:#46]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/46) [[task:#47]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/47)

**Tech Stack.** The tools and services used for this project will be react native along with expo for the mobile developmnet. The backend will be made using firebase for a db, storage, and auth. Next mapbox will be used to display the live map, and python will be used for the race time prediction. This will be done is sprint 2. This tech stack will deliver the neccesary tools to build the our protype.[[task:#48]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/48)

**Prototype Skeleton.** Within the protoype folder we will create files necessary to build the application. This will be done in sprint 2. This prototype skeleton provides us with a means to connect our tools and services. [[task:#49]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/49)

**Proposal Fixes.** Removed old bare reference from proposal which is an old task refence §1.1. Done in sprint 2. This delivers a correct link. [[task:#42]](https://github.com/markachavez2003-lab/CPSC490-G11-5Guys/issues/42)

## 5. Project Outcomes

> Describe the outcomes or deliverables, e.g., final project report, user
> manuals, source code, data or database files, etc.
>
> Note: the deliverables always include the team GitHub repository, which
> must already contain prototype v0 (a thin end-to-end proof-of-concept,
> however small, running when this proposal is submitted). Briefly describe
> what your v0 demonstrates and how to run it.

〈**One or two paragraphs** explaining the project outcome overall — what will
exist when the project is finished, and what it will let someone do. Keep it
prose, not a checklist; name the deliverables inside the paragraphs, and say
briefly what prototype v0 demonstrates today and how to run it.〉

## 6. Project Timeline

> Identifies tasks (project objectives) to be performed, milestones to be
> met, and the estimated number of hours for each task.

〈**This is the plan for CPSC 491 next semester — the implementation timeline,
not this semester's proposal work.** Identify the tasks (your objectives from
§2), the milestones, and the estimated hours for each, in the order they will
be built. State the assumptions it rests on (sponsor availability, data
access, hardware).〉

| Task (objective) | Milestone | Owner | Est. hours | Spring phase |
|---|---|---|---|---|
| 〈…〉 | 〈…〉 | 〈…〉 | 〈…〉 | 〈…〉 |
| 〈…〉 | 〈…〉 | 〈…〉 | 〈…〉 | 〈…〉 |

〈Do **not** put this fall's four proposal sprints here — those live on the
project board and in `docs/sprint-reviews/`. This section answers "how does
the system actually get built next semester?"〉

## 7. AI Usage

> Per the course AI policy (see the syllabus, Use of AI Tools), disclose the
> AI tools used in preparing this proposal and the prototype: which tools,
> for what tasks (e.g., code generation, test writing, debugging,
> diagramming), and approximately what fraction of each artifact was
> AI-assisted.
>
> Reminder: the prose of this proposal must be your own writing. You remain
> fully responsible for the correctness of all AI-assisted work, including
> the prototype code.

〈Your disclosure. Naming the tool is not disclosure — name what it drafted,
what fraction of each artifact was AI-assisted, and how you verified it.〉

## 8. References

[1] Osborne, A., Mossman, H., Caporn, S., and Coulthard, E. Comparing the accuracy and precision of smartphone and specialist handheld GNSS receivers for use in ecological fieldwork. Ecological Solutions and Evidence, 6(1), e70015, 2025. https://doi.org/10.1002/2688-8319.70015

[2] Strava. Strava Features. https://www.strava.com/features (date accessed, 10/11/26)

[3] Nike. Nike Run Club. https://www.nike.com/nrc-app (date accessed, 10/11/26)

[4] AllTrails. AllTrails: Trail Guides & Maps. [https://www.alltrails.com/](https://support.alltrails.com/hc/en-us/sections/360003535812-AllTrails-Plus-features) (date accessed, 10/11/26)





〈Number references in the order first cited and cite them in the text as
[1], [2]. Every entry must be a source a team member has actually read and
can produce on request.〉
