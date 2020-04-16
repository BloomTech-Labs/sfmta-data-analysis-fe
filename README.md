🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline, feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 5️⃣ next to each item represent the week that part of the docs needs to be comepleted by. Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric. Contributing to docs does NOT count as a PR to meet your weekly requirements.

#SFTMA Data Analysis

1️⃣ You can find the deployed project at https://master.d3j9ctmbednoov.amplifyapp.com/

## 4️⃣ Contributors

🚫Add contributor info below, make sure add images and edit the social links for each member. Add to or delete these place-holders as needed

|                                                     [Cody Holman](https://github.com/cholman)                                                      |                                                    [Connor Angelis](https://github.com/KonstadinosAngelis)                                                    |                                                   [Jonathan Allison](https://github.com/qb1968)                                                   |                                                 [Michelle Sirimanivong](https://github.com/MicheSi)                                                  |                                                    [Erik Sandoval](https://github.com/erik-sandoval)                                                     |
| :------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://ca.slack-edge.com/T4JUEB3ME-UP7JGJEH1-78bffb2d8c94-512" width = "200" />](https://github.com/cholman) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UPCKFA2QH-bbfef33c1387-512" width = "200" />](https://github.com/KonstadinosAngelis) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UP4KTQJ5R-e0e3d1eb775e-512" width = "200" />](https://github.com/qb1968) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UNM5RT3SA-61edda117b14-512" width = "200" />](https://github.com/MicheSi) | [<img src="https://ca.slack-edge.com/T4JUEB3ME-UGGNMSD35-6cd45ead3911-512" width = "200" />](https://github.com/erik-sandoval) |
|                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/cholman)                                |                                     [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/KonstadinosAngelis)                                      |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/qb1968)                          |                                 [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/MicheSi)                                  |                                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/erik-sandoval)                                   |
|                   [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/cody-holman)                    |                         [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/konstadinos-a-a8a641199/)                         |                   [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/jonathan-allison-1a4136196/)                   |                    [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/michellesirimanivong/)                     |                      [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/)                       |

<br>
<br>

🚫 4️⃣ Optional examples of using images with links for your tech stack, make sure to change these to fit your project

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
![Typescript](https://img.shields.io/npm/types/typescript.svg?style=flat)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](netlify link goes in these parenthesis)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

🚫 more info on using badges [here](https://github.com/badges/shields)

## Project Overview

1️⃣ [Trello Board](https://trello.com/b/0X0QTiP4/labs22-sftma-data-analysis)

1️⃣ [Product Canvas](https://www.notion.so/964c1cde8a35484eb17eafc048b9dc72?v=e7b8584f2c204b6d8d3ff917203effd1)

1️⃣ [UX Design files](https://www.figma.com/file/hiuVPSUPr2WiyDfFFdx1g3/SFMTA-Data-Analysis%2C-Justin?node-id=179%3A0)

🚫 There is no publically available source of historical SFMTA bus and rail locations so that citizens, oversight committee members, and SFMTA staff can figure out what causes service distruptions.

### 4️⃣ Key Features

- Have a publically available database of historical data on bus and rail cars.
- Near real time analysis of travel times from major travel corridors.
- Analysis of bunching and gapping on bus and rail lines.

## 1️⃣ Tech Stack

### Front end built using:
    React, plotly

#### _Front end framework goes here_
React
🚫 Why did you choose this framework?

- Easy to create a new app with pre-installed dependencies with Create React App.
- Able to use React compatible libraries for styling and functionality.
- Easy to use

🚫List the rest of the front end features and libraries in the same format as the framework above.

#### Front end deployed to AWS

# APIs

## 3️⃣ https://sfmta-test.herokuapp.com/type-map?type=${type}

Flask App API that returns data on traces, layout and names for SFMTA routes.

## 3️⃣ https://sfmta-test.herokuapp.com/routes-info

Flask App API that returns data on route id, route name and type of route.

# 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

🚫These are just examples, replace them with the specifics for your app

    *  REACT_APP_PLOTLY_API_KEY = pk.eyJ1IjoicGFuZHVoaCIsImEiOiJjanpiaG53bTgwMTQwM25sbmZhcGp6cGJqIn0.Cp4ld9nKsu7zE4-YbSeeQg 

# 5️⃣ Content Licenses

🚫For all content - images, icons, etc, use this table to document permission of use. Remove the two placeholders and add you content to this table

| Image Filename | Source / Creator | License                                                                      |
| -------------- | ---------------- | ---------------------------------------------------------------------------- |
| favicon.ico    | Favicon.io      | [Favicon](https://favicon.io/) |
| apple-touch-icon.png      | Favicon.io      | [Favicon](https://favicon.io/)                             |
| logo.png    | Icons8         | [Icons8](https://icons8.com/license)                                     |
| trolley.jpg    | Unsplash         | [Unsplash](https://unsplash.com/license)                                     |
| city.jpg       | Unsplash         | [Unsplash](https://unsplash.com/license)                                     |
| cody.jpg       | Cody Holman      | Creative Commons                                                            |
| agustin.jpg       | Agustin Vargas      | Creative Commons                                                            |
| connor.jpg       | Connor Angelis     | Creative Commons                                                            |
| erik.jpg       | Erik Sandoval      | Creative Commons                                                            |
| jonathan.jpg       | Jonathan Allison      | Creative Commons                                                            |
| jordan.jpg       | Jordan Ireland      | Creative Commons                                                            |
| justin.jpg       | Justin Menendez      | Creative Commons                                                            |
| mathias.jpg       | Mathias Skreden      | Creative Commons                                                            |
| michelle.jpg       | Michelle Sirimanivong      | Creative Commons                                                            |

# 4️⃣ Testing

🚫Document what you used for testing and why

# 4️⃣ Installation Instructions

Install dependencies with npm install

## Other Scripts

    * start - starts the production server after dependencies are installed
    * test - runs tests in **tests** directory
    * eject - copy the configuration files and dependencies into the project so you have full control over them

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See Data Science Documentation (https://github.com/Lambda-School-Labs/sfmta-data-analysis-ds) for details on the backend of our project.
