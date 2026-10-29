# Specification — Posts and shareable race page

> Epic: #26 · Stories: #30, #31
> Related task: #44 · Owner: Cardin Phan · Sprint: 2 · Status: draft -> revising

## Scope

**In scope.** Objective 2.1: Allow users to share posts into public web pages which will contain images and text uploaded by the user, (limit of 1 photo and 100 characters of text) It must also be able to display each post in a speedy time frame. This means we need a database that can be added too and retreived at real time and must be able to include images. We would also need a website that will display user location and post.

**Out of scope for Goal 2.** Automatic GPS tracking or mile detection to know where we are at. A feature to add comments, likes, follower feeds, and direct messaging. This can be added in future sprints.

## Functional requirements

Written in EARS form — "when 〈trigger〉, the system shall 〈response〉" — because each one then becomes a test almost verbatim.

| ID | Requirement | Story |
|---|---|---|
| FR-1 | When a user creates post, the system shall make the post linked to a specific distance in the race | #30 |
| FR-2 | When a user enters text to post, system doesnt accept any post longer than 100 words, and if rejected display error message | #30 |
| FR-3 | When a user attaches a photo to a post, system only allows one picture to be uploaded, else show clear sign on rejection | #30 |
| FR-4 | When a user submits a valid update for a race, the system shall store the post's text, mile marker, and associated photo with that race. | #30 |
| FR-5 | When a spectator opens the shared page for a race, the system shall display the posts that belong to that race, including each post's mile marker, text and attached photo, if any. | #30 |
| FR-6 | When a spectator opens a shareable race link, the system shall allow the spectator to view its public posts without creating a user account. | #30 |
| FR-7 | When a post is submitted by user, the system must push only live spectator website in 10 seconds | #30 |

## Non-functional requirements

| ID | Requirement | Why it matters here |
|---|---|---|
| NFR-1 | Passwords are stored only as salted hashes, never in plaintext or reversible form. | Kept from template since its good security mesure|
| NFR-2 | Public race page allows read access only for users that are not signed in and dont have permissions | Spectators should be viewers, not post authors. |
| NFR-3 | Post by the user that is text is only submitted as text, and cannot be ran as code. | Addresses a security concern that malicous users could inject their own code, ONLY RUN AS STRING! |
| NFR-4 | Users are authenticated and their upload paths are confirmed for images and post | Unrestricted public writes would let anyone impersonate a user. |

## Acceptance criteria (epic level)

- [ ] A runner can create a post linked to a race and mile marker. (FR-1, FR-4)
- [ ] Posts with more than 100 characters or one photo are rejected with an error message. (FR-2, FR-3)
- [ ] Spectators can open a shared link and view that race's posts without signing in. (FR-5)
- [ ] New posts appear on the spectator page within 10 seconds of successful upload under normal network conditions. (FR-6)
- [ ] Spectators cannot edit or delete posts, and only authenticated runners can publish posts for their own races. (NFR-2, NFR-4)
- [ ] Submitted text is displayed safely without executing code. (NFR-3)
- [ ] python .github/scripts/check_repo.py is green and the prototype's tests pass.

## Open questions

| Question | Proposed owner | Needed by |
|---|---|---|
| Can all members be looked at with a link, or do you have to join an event/setup a race for the public webpage to be made? | Cardin | the time we build website |
| Should we change our frameworks and programs based on what each member can code or should we just learn it for this project? | Team | Before integrated prototype |
