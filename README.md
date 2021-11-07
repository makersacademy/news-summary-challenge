# News Summary challenge

## Usage

- Clone this repo
```
$ git clone git@github.com:s-palmer/news-summary-challenge.git
```
- Install dependencies
```
$ npm install
```
- Make sure bundle is built
```
$ npm run build
```
- Launch HTTP Server
```
$ http-server -c-1
```
- Browse to the URL provided by HTTP Server (usually http://127.0.0.1:8080)
- Enjoy the news.

## Challenge

As usual please start by forking this repo.
You'll create an app that summarises the news.

## Project overview

Your app should grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

## User Stories

Some of these stories will need decomposing if they seem too large.

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

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

## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)