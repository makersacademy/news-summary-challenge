# News Summary App

A javascript application created as a weekend challange at the 7th weekend of Makers Academy.
Read the headlines from Guardian API and the summaries from Aylien in one place!

## Technology used

* Front-end: Javascript, jQuery, HTML, CSS
* Back-end: Javascript
* Testing: Jasmine

## How to run it

ONLINE:
* news-summaries.surge.sh/
/it takes some time for the API to load - in case of problems, please refresh the page/

LOCALLY:
* Clone this repository into to your local computer.
* Open the index.html file in the browser

## Design of code

#### Constructor News
methods:

`headline` - headline from Guardian.
`url` - url of an article.
`id` - id of an article.
`linkToImage` - link to image.

#### App.js

methods:
`getNews` - gets the headlines, urls and links to image from the Guardian API.
`getSummary(singleNews)` - gets a summary from Aylien API, using an url of a singleNews object.
`render` - renders the grid with news.
`_onClick(singleNews)` - shows a particular headline with a summary in a new window.

## Screenshots

Big screen

![See image](/public/1.png)

![See image](/public/2.png)

Mobile

![See image](/public/3.png)


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
