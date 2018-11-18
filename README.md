# News Summary App

## Description

* A single-page web app that gets news headlines from the Guardian API and uses the Aylien Text Analysis API to summarise each story.
* Created for Makers Academy.

## How to use

* Fork and clone this repo.
* Run `node server.js` in the command line to launch the server.
* Visit localhost:4000 to see an index page.
* Click on `spec-runner.html` and open the console to view tests. A green ':)' means the test is passing.
* Navigate back to the index page and click on `site.html` to visit the site. It will take a few seconds to load.
* Click on a headline to see a summary of the article underneath.

## My approach

* I wrote my own simple testing framework modelled after Jasmine.
* I used this framework to test-drive the app.
* I tried to keep modules and functions to a single responsibility where possible, and follow a model-view-controller pattern in javascript.
* I aimed to teach myself, and use, ES6 syntax: specifically arrow syntax for functions where useful, string interpolation, classes, and ES6 modules with import and export.

## Room for improvement

* If I had more time, I would aim to:
  - improve the styling, including mobile optimisation and animations
  - improve my testing framework, for example adding functions and classes for mocking/stubbing to DRY out the tests
  - setup and use my own API keys for the Guardian and Aylien APIs
