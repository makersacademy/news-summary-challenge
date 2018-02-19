# News Summary challenge

## Getting started
* Clone repository
* cd news-summary-challenge
* node test/server.js
* Navigate to http://localhost:3000/


## Challenge

I have created an app that summarises the news. I have completed this challenge using a single page web app

## What it does

The app grabs all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will redirect you to a full page display within the Guardian Website.

Clicking the link to the side of the headline labelled click for more information will display a summary of the article below.

### Technologies

HTTP-Server, JavaScript, CSS and HTML.

## What it looks like

![alt text](https://i.imgur.com/gwudqLC.png)
![alt text](https://i.imgur.com/tzqrc4A.png)

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

## Improvements
Given more time I would work on single responsibility principle. I am aware areas of the code are not DRY - this could be improved.
As I have used my own test framework I have yet to complete feature tests.  I have isolated API calls within the unit tests as required.

The look of the website needs work, along with additional features which I have not implemented.


* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests
