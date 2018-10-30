# Free Candy Group 2 - Experience/Event App

## The Problem

When traveling to another city or staying in, people want more personal and unique experiences. What’s a better way to communicate than with the
locals and community surrounding? Locals have a wonderful connection to the city they live in and know the ins and outs. Some are able to contribute more due to their acquired skills or personal belongings. Perhaps the host just wants another friend to tag along. Although I have gained inspiration from Airbnb’s experience feature, I do see that they lack the ability to let host and buyer communicate to groups. Having group communication helps direct information out quicker to many people. Additionally, groups can communicate similarities of what is to be expected and get to know each other prior to events.

## The Solution

Creating a platform that helps people use their skills efficiently and be rewarded for their contributions to the community will give newcomers rich and unique experiences. Creating an open feature of communication will help hosts analyze what their users intentions are and adjust accordingly.

### Members / Roles

|                                   | Zachary       | Seth       | Leo       | Mateus    | Jose      |
| --------------------------------- | :-----------: |:----------:| :--------:| :-------: | :-------: |
| Front-end Design (HTML & CSS)     | If needed     | Yes        | If Needed | Yes       | If Needed |
| Front-end Development             | Yes           | Yes        | If Needed | Yes       | If Needed |
| Back-end Development              | Yes           | If needed  | Yes       | If needed | Yes       |
| Database (MongoDB)                | If needed     | If needed  | Yes       | If needed | Yes       |

### Requirements

Requirements will be gathered from clients through an interview process, and all requirements will be recorded in GitHub as issues. Each requirement will be tagged as either `frontend`, `backend`, or `integration` (for when frontend and backend features are integrated together). Each issue will also be tied to our kanban board to track that feature's progress and will be assigned to a specific person.

### Implementation and Testing

Our project implements a test-driven developement approach. For every feature that we implement, we will first right the 
appropriate test for that feature and then implement the feature. Testing before implementing ensures the test oracle is defined from the requirements and not the assumptions in the implementation.

### Workflow

##### Issue Tracking

For tracking issues through their life cycle we will use GitHub Projects. We have a kanban board setup in our `Experiences` Project with five stages for issues: To Do, Emergency, In Progress, Testing, Done.

##### Features and issues:
- Features should be implemented as `issues` on individual `isssue` branches.
- Branches should be named according to the `issue` and its `number`. Say `issue75`.
- When work for an `issue` depends on work being developed on another `issue` branch, merge should occur between the branches in question.

##### Version Control

For our version control workflow we will use the [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) along with an additional `development` branch. That is, our Feature Branch Workflow will take place off of the development branch. Once multiple features are integrated into the development branch, the development branch will be integrated into the master branch for a release.

##### Merge and Pull Requests
Code to be merged to `master` needs to be submitted as `pull requests` to be reviewed by the team. Code is to be merged if the implementation meets all of the following criteria:
- Code passes all previous and current test cases
- Feature is focused and of a single concern
- Feature in does not break previous implementation
- Code has been reviewed by someone other than the author
- Code meets standards set by the team (style, naming conventions, comments, levels of abstractions, etc)

### Run

`node ./blueprint-experiences/app`

`npm start --prefix ./ember-experiences/`


### Dependencies

`npm install -g ember-cli`

`npm install -g @onehilltech/blueprint-cli`

`npm install --save sendbird`

`ember install ember-auto-import`

`ember install ember-cli-styled`

### Web Stack

* #### [EmberJS](https://www.emberjs.com/) Front-end

* #### [Blueprint](https://blueprint.onehilltech.com/) Back-end

* #### [MongoDB](https://www.mongodb.com/) Database

### Web Technologies

* #### [SendBird](https://docs.sendbird.com/javascript/quick_start) for group messaging

* #### [Stripe](https://stripe.com/us/payments) for payments

* #### [FullCalendar](https://fullcalendar.io/) for event scheduling

### Ember Packages

* #### [ember-auto-import](https://github.com/ef4/ember-auto-import) for zero config import from npm packages

* #### [ember-cli-styled](https://github.com/onehilltech/ember-cli-styled) for modularizing ember styling
