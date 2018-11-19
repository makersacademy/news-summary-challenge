# News Summary Challenge

Hacker News clone written in vanilla JS. Single-page app. Makes use of two APIs, one to source stories from The Guardian's Technology section, one to summarize the story in 5 sentences. Test-driven.

Hash links used throughout, i.e. no page reloads. Clicking a headline link takes you to a single summary view for that news article with an image. Clicking the title takes you back to the homepage. 

## Usage

To view the app, clone to your local machine, install packages, then run the server. For example:

```shell
$ git clone https://github.com/hnryjmes/news-summary-challenge.git
$ cd news-summary-challenge
$ npm install
$ npm start
```

By default, the app should be available to view on `localhost:8080`.

## Tests

To run tests, follow instructions as above, then navigate to `/SpecRunner.html` in your browser. Open the console in DevTools to see current passing or failing tests.

## Screenshots

![Screenshot 1](./images/screenshot.png)
![Screenshot 2](./images/screenshot2.png)

## User Stories

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
```
