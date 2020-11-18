# News Summary challenge

## Project overview

A single page web app that will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

### Technologies

Written in frontend JavaScript, CSS and HTML.

### Serving your app

Uses the static web server [http-server](https://www.npmjs.com/package/http-server) to serve the HTML, CSS and JavaScript files. 

### APIs

[Guardian newspaper API](https://open-platform.theguardian.com/documentation/) and [Aylien text summary API](https://docs.aylien.com/textapi/endpoints/#summarization) via the [MakersAcademy News Summary API](https://github.com/makersacademy/news-summary-api). 

## User Stories

### Complete

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

### Incomplete
```
As a busy politician
I can see a relevant picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

```
As a busy politician
I can click a news headline to see a summary and a photo of the news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see click a news article summary title which links to the original article
So I can get a few more details about an important story
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

## Getting Started
These instructions will allow you to run the current project on your local machine for development and testing purposes.
```
git clone git@github.com:rjkviegas/news-summary-challenge.git
cd news-summary-challenge
```
Check node and npm are installed
```
node -v
npm -v
```
Install http-server
```
npm install http-server --save
```
Run http-server to view index.html page (Google Chrome recommended browser)
```
node node_modules/http-server/bin/http-server
```

Open Developer Tools to view test results in console.
