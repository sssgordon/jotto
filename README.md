#  :pencil2: JOTTO :pencil2:

## :trophy: [Checkout the deployed version here!](https://obscure-fortress-88963.herokuapp.com/) :trophy:

![Jotto webpage](https://github.com/sssgordon/jotto-client/blob/master/public/Screenshot%20from%202020-01-03%2001-32-21.png)

## What this project is about

This jotto game demonstrates my implementation of test-driven development (TDD) using Jest and Enzyme on React and Redux. The app is modelled after Bonnie Schulkin's [course](https://www.udemy.com/course/react-testing-with-jest-and-enzyme/) on Udemy.

Jotto is a word game where the player tries to guess the 5-letter *secret word* :lock: After every attempt, the app will tell the player the amount of letters in the guessed word matching the *secret word*. For example, if the *secret word* is "party" and the guessed word is "train", the app will tell you that 3 letters are matching ("a", "r", "t").

Have a go and good luck!

## Table of contents

* [Technologies used](#technologies-used)
* [Goals for this project](#goals-for-this-project)
* [Random word server repository](#random-word-server-repository)

## Technologies used

* Jest
* Enzyme
* Moxios
* check-prop-types
* Axios
* React
* Redux
* Redux Thunk

## Goals for this project

:point_down: **Click links to view some samples in this project** :point_down:

The main goals are to implement unit and/or integration testing for:

* [React component](https://github.com/sssgordon/jotto-client/blob/master/src/components/Input/Input.test.js)
* [Functional unit](https://github.com/sssgordon/jotto-client/blob/master/src/helpers/index.test.js)
* [PropTypes (line:43)](https://github.com/sssgordon/jotto-client/blob/master/src/components/Congrats/Congrats.test.js)
* [Reducer](https://github.com/sssgordon/jotto-client/blob/master/src/reducers/successReducer.test.js)
* [Action creator](https://github.com/sssgordon/jotto-client/blob/master/src/integration.test.js)
* [Redux Thunk with Axios](https://github.com/sssgordon/jotto-client/blob/master/src/actions/index.test.js)

## Random word server repository

For this app to work, we need to make a get request to the [Random Word Server](https://github.com/flyrightsister/udemy-react-testing-projects/tree/master/random-word-server) (credits to Bonnie Schulkin).
