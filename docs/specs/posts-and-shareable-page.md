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
| FR-2 | When a user enters text to post, system doesnt accept any post longer than 100 characters, and if rejected display error message | #30 |
| FR-3 | When a runner attaches more than one photo to a post, the system shall reject the additional photos and display an error message | #30 |
| FR-4 | When a runner submits a valid post, the system shall save its text, mile marker, and any attached photo under the correct race. | #30 |
| FR-5 | When a spectator opens a race's shared webpage, the system shall display only posts associated with that race, including each post's mile marker, text, and any attached photo. | #30 |
| FR-6 | When a spectator opens a public race link, the system shall display the race's posts without requiring the spectator to log in or register. | #30 |
| FR-7 | When a runner successfully uploads a post, the system shall display it on the spectator webpage within 10 seconds. | #30 |

## Non-functional requirements

| ID | Requirement | Why it matters here |
|---|---|---|
| NFR-1 | Passwords are stored only as salted hashes, never in plaintext or reversible form. | Kept from template since its good security mesure|
| NFR-2 | Public race page allows read access only for users that are not signed in and dont have permissions | Spectators should be viewers, not post authors. |
| NFR-3 | Post by the user that is text is only submitted as text, and cannot be ran as code. | Addresses a security concern that malicous users could inject their own code, ONLY RUN AS STRING! |
| NFR-4 | Users are authenticated and their upload paths are confirmed for images and post | Unrestricted public writes would let anyone impersonate a user. |

## Acceptance criteria (epic level)

- [ ] A runner can submit a valid post, and the saved post contains the correct race ID, mile marker, text, and optional photo. (FR-1, FR-4)
- [ ] Posts containing more than 100 characters and/or more than one photo are rejected, and the runner receives an error message explaining which limit was        exceeded. (FR-2, FR-3)
- [ ] Spectators can open a shared link and view that race's posts without signing in. (FR-5, FR-6)
- [ ] New posts appear on the spectator page within 10 seconds of successful upload under normal network conditions. (FR-7)
- [ ] Attempts by spectators to edit or delete posts must be denied. Attempts by unauthenticated users or runners posting to another runner's race must also        be denied. (NFR-2, NFR-4)
- [ ] When a runner submits a post containing HTML or JavaScript code, the spectator webpage displays plain text without executing the code. (NFR-3)
- [ ] python .github/scripts/check_repo.py is green and the prototype's tests pass.
- [ ] Passwords are never stored as readable text in the application database. The authentication system uses secure password hashing, and a review confirms        that plaintext passwords are not saved. (NFR-1)

## Open questions

| Question | Proposed owner | Needed by |
|---|---|---|
| Can spectators access a race page without joining an event? | Cardin | Resolved: Anyone with the shared link can view the public page without an account. |
| Should we change our frameworks and programs based on what each member can code or should we just learn it for this project? | Team | Before integrated prototype |
