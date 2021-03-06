#  :pencil2: Jotto :pencil2:

## :trophy: [Checkout the deployed version here!](http://obscure-fortress-88963.herokuapp.com/) :trophy:

:warning: *Since the app is deployed on heroku for free it sleeps by default, so give it some time to wake up* :wink:

![Jotto webpage](https://github.com/sssgordon/jotto-client/blob/master/public/Screenshot%20from%202020-01-03%2001-32-21.png)

## What this project is about

This jotto game demonstrates my execution of **test-driven development (TDD)** using **Jest** and **Enzyme** on **React and Redux**.

Jotto is a word game where the player tries to guess the 5-letter *secret word* :lock: After every attempt, the app will tell the player the amount of letters in the guessed word matching the *secret word*. For example, if the *secret word* is "party" and the guessed word is "train", the app will tell you that 3 letters are matching ("a", "r", "t").

Have a go and good luck!

## Table of contents

* [Technologies used](#technologies-used)
* [Goals for this project](#goals-for-this-project)
* [Random word server repository](#random-word-server-repository)
* [Credits](#credits)

## Technologies used

* Jest
* Enzyme
* Axios
    * Moxios
* check-prop-types
* React
* Redux
    * Redux Thunk
* JSDoc
* Bootstrap

## Goals for this project

:eyes::point_down: **Click links to view some samples in this project** :point_down::eyes:

The main goals are to implement unit and/or integration testing for:

* [React component](https://github.com/sssgordon/jotto-client/blob/master/src/components/Input/Input.test.js)
* [Functional unit](https://github.com/sssgordon/jotto-client/blob/master/src/helpers/index.test.js)
* [PropTypes (line: 43)](https://github.com/sssgordon/jotto-client/blob/master/src/components/Congrats/Congrats.test.js)
* [Reducer](https://github.com/sssgordon/jotto-client/blob/master/src/reducers/successReducer.test.js)
* [Action creator](https://github.com/sssgordon/jotto-client/blob/master/src/integration.test.js)
* [Redux Thunk with Axios](https://github.com/sssgordon/jotto-client/blob/master/src/actions/index.test.js)

## Random word server repository

For this app to work, we need to make a get request to a [Random Word Server](https://github.com/flyrightsister/udemy-react-testing-projects/tree/master/random-word-server) (credits to Bonnie Schulkin).

In order to deploy the server to heroku, I cloned a [server repo](https://github.com/sssgordon/jotto-server) on my own. This is where the random words are coming from.

## Credits

The app is modelled after Bonnie Schulkin's [course](https://www.udemy.com/course/react-testing-with-jest-and-enzyme/) on Udemy. She is an absolute joy to listen to because of her boomer jokes on millennial trends! :skull:
