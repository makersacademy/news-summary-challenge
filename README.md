# News Summary App
A single page web app for grabbing displaying all the headlines from the Guardian newspaper API.

## Motivation
To test learning of single page web applications, in vanilla JavaScript (no libraries!), with HTML and CSS, with APIS.

## Build status
Working.

## Screenshots
![Home Page](https://github.com/chriswhitehouse/news-summary-challenge/blob/master/screenshots/Screenshot%202021-01-24%20at%2021.58.19.png)

![Summary Page](https://github.com/chriswhitehouse/news-summary-challenge/blob/master/screenshots/Screenshot%202021-01-24%20at%2021.58.41.png)

## Tech/framework used
JavaScript, HTML, and CSS.

## Features
Clicking on a headline will show a summary of the article.

### User Stories
```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

```
As a busy politician
So I can get a few more details about an important story
I can see click a news article summary title which links to the original article
```

```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```

```
As a busy politician
To make my news reading more fun
I can see whizzy animations in the app
```

## Installation

* Fork repo
* Clone repo into your local drive.

## API Reference
This project uses the Guardian news api (through a heroku app for privacy).

Guardian API documentation is here: https://open-platform.theguardian.com/documentation/

## Tests
Home made test framework: ZenSpec.

* `$ open SpecRunner.html`

## How to use?
Ensure you have http-server installed: https://www.npmjs.com/package/http-server

From project root directory:

* `$ http-server`
* then navigate to 'localhost:8080' in your favourite browser.
