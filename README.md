News Summary challenge
======================

Completed this as seventh weekend challenge at Makers Academy([makersacademy/news-summary-challenge](https://github.com/makersacademy/news-summary-challenge)), writing this app with pure JavaScript.

This is an app that shows the head line, displays the pictures from original news page, summarises the news, and shows the sigle news article.

**L: News List**
![newslist](https://user-images.githubusercontent.com/36331920/39725697-a454d01a-5244-11e8-842c-48b75ebbac40.png)
**R: Sigle News**
![singlenews](https://user-images.githubusercontent.com/36331920/39725698-a475a39e-5244-11e8-8884-8d5d2e638c4d.png)

## Table of content

- [Setup](#setup)
- [Usage](#usage)
- [Test](#test)
- [User Stories](#user-stories)
- [Technologies](#technologies)
- [Resources](#resources)


## Setup

- Clone this repo, run:
`git clone https://github.com/shihhanwang/news-summary-challenge.git`

## Usage

- After setting up, go to its root directory and run: `http-server`
- In your brower, you will be able to access it at `localhost:8080`

## Test

- Open `SpecRunner.html` in browser, using Console to see the results of the tests



## User Stories

```
As a modern busy person
I can see all of today's headlines in one place
So I know what the big stories of the day are
```
```
As a modern busy person
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```
```
As a modern busy person
I can see a summary of a news article
So I can get a few more details about an important story
```
```
As a modern busy person
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```
Uncompleted:

```
As a modern busy person
I can read the site comfortably on my phone
Just in case my laptop breaks
```
```
As a modern busy person
I can see whizzy animations in the app
To make my news reading more fun
```
## Technologies

- API request: [Guardian News API](https://open-platform.theguardian.com/documentation/)
- Front-end style: HTML, CSS
- The rest: **PURE JAVASCRIPT**

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests
