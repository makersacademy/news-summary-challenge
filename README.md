# News Summary challenge

This app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article. The aim of this weekend challenge was to consolidate my understanding of single page web apps written in front end JavaScript. Although this challenge is currently incomplete, I am happy with what I have done so far, and feel I have gained more understanding than I initially had after the last week of Makers. I still need to implement the news summary api and the individual news article views that are served when a news story is clicked.

I have also created a basic testing framework from scratch to TDD this code, with relatively good coverage, however more work needs to be done.

### Technologies

This is a single page web app. The code is written in frontend JavaScript, CSS and HTML.  

It uses a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve the HTML, CSS and JavaScript files. It sends requests to an API to get data from the Guardian and to summarise text.

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
```

## Instructions

```
Clone this repository
```

```
Install Node and NPM
```

```
Run $ node node_modules/http-server/bin/http-server to run the app
```

```
Run $ open testingFramework/SpecRunner.html to run the tests
```
