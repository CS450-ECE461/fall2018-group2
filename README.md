# Free Candy Group 2 - Experience/Event App

## The Problem

When traveling to another city or staying in, people want more personal and unique experiences. What’s a better way to communicate than with the
locals and community surrounding? Locals have a wonderful connection to the city they live in and know the ins and outs. Some are able to contribute more due to their acquired skills or personal belongings. Perhaps the host just wants another friend to tag along. Although I have gained inspiration from Airbnb’s experience feature, I do see that they lack the ability to let host and buyer communicate to groups. Having group communication helps direct information out quicker to many people. Additionally, groups can communicate similarities of what is to be expected and get to know each other prior to events.

## The Solution

Creating a platform that helps people use their skills efficiently and be rewarded for their contributions to the community will give newcomers rich and unique experiences. Creating an open feature of communication will help hosts analyze what their users intentions are and adjust accordingly.

### Members / Roles

|                                   | Zachary       | Seth       | Leo       | MJ        | Jose     |
| --------------------------------- | :-----------: |:----------:| :--------:| :-------: | :-------:|
| Front-end Design (HTML & CSS)     | If needed     | Yes        | If Needed | Yes       | If Needed|
| Front-end Development             | Yes           | Yes        | If Needed | Yes       | If Needed|
| Back-end Development              | Yes           | If needed  | Yes       | If needed | Yes      |
| Database (MongoDB)                | If needed     | If needed  | Yes       | If needed | Yes      |

### Workflow

##### Issue Tracking

For tracking issues through their life cycle we will use GitHub Projects. We have a kanban board setup in our `Experiences` Project with five stages for issues: To Do, Emergency, In Progress, Testing, Done.

##### Version Control

For our version control workflow we will use the [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) along with an additional `development` branch. That is, our Feature Branch Workflow will take place off of the development branch. Once multiple features are integrated into the development branch, the development branch will be integrated into the master branch for a release.

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
