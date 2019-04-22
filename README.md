# Project title

News Summary Challenge: This is the weekend challenge after week 7 at Makers Academy.

The intention is to create an app that summarises the news, by grabbing all the
headlines from the Guardian newspaper API and displaying them on a page. Clicking
on a page will show a summary of the article. The API is hosted on an external
server, which makes this 'serverless architecture'.

## Motivation

This project was created to develop my skills in HTML, CSS and front end Javascript.

### Build status

The project is currently under construction, it may not be completed as this is
a practice exercise to practice skills in the above areas.

### Screenshots / UML / Notes / Diagrams

Should there be any images, please find them in the images folder of the repo.

### User Stories

These user stories may be further deconstructed into smaller stories.

As a busy politician,
I can see all of today's headlines in one place,
So I know what the big stories of the day are.

As a busy politician,
I can click a link to see the original news article,
So that I can get an in depth understanding of a very important story.

As a busy politician,
I can see a summary of a news article,
So I can get a few more details about an important story.

As a busy politician,
I can see a picture to illustrate each news article when I browse headlines,
So that I have something nice to look at.

As a busy politician,
I can read the site comfortably on my phone,
Just in case my laptop breaks.

As a busy politician,
I can see whizzy animations in the app,
To make my news reading more fun.

## Tech / framework used

An apple macbook was used to write code using VSCode as an editor and;

* Javascript was used for the front end actions.
* HTML was used for the structure.
* CSS was used to make things prettier.
* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests

I will use a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve the HTML, CSS and JavaScript files.  You'll send requests to an API to get data from the Guardian and to summarise text.

### Code style

ESlinting will be used for styling the code, to run it, please use:

* $ ./node_modules/.bin/eslint yourfile.js

#### Tests

A TDD process was used in the development of this project, please see the
attached spec files for details of the testing that was carried out.

#### Installation / Running

Please use the following to run the file:

1) Open index.html file in a browser.

#### API Reference

The intention is to interact with the Guardian News API.

#### Credits

Full credit given to Makers Academy who suggested the project.

[Some guidance came from Makers Academy's rescommended resources re API](https://github.com/makersacademy/news-summary-api)

[Further guidance from Makers on creating a single page app](https://github.com/makersacademy/course/blob/master/further_javascript/frontend_single_page_app_guidance.md)

[Support taken from this site])https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/)

No contributions are required at this time, as this is a training exercise.