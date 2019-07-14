# News Summary Challenge

Makers News Summary Challenge. Note that the challenge is not complete.

* There is a static HTML server included.
* There is a basic controller, with unit test.
* There is a simple model (NewsStory) with test for headline property.
* There is a basic model view with unit test.
* Guardian API is not used.

## How to Install

* Clone this repository.
* Install the node dependencies.

```console
admin$ npm install
```

## How to Run

* Start the static web server.

```console
admin$ node node_modules/http-server/bin/http-server
```

* In the browser, navigate to the index page.

```
localhost:8080/index.html
```

## How to Test

* Open spec-runner.html in the browser.
* Open the Javascript console to view the test results.

* The details of the test runner functions I've developed can be found here:

https://github.com/zepherine2006DEV/js-testing-functions


## User Stories

Some of these stories will need decomposing if they seem too large.

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```

```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
```

```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun