# News Summary challenge

## Set up
- open `index.html` in browser.
- it's a bit slow so bear with it :-)

## Project overview

This app grabs all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline shows a summary of the article.

### Technologies

- A single page web app.  Code is in frontend JavaScript, CSS and HTML.
- No libraries of frameworks. Not even testing framework - I wrote that.

### Serving the app

This uses a static server to serve the HTML, CSS and JavaScript files. It sends requests to an API to get data from the Guardian and to summarise text.

## User Stories

Full instructions [here](https://github.com/clarepins/news-summary-challenge/blob/d4cf6f0379a6024ec4cd6e78f84c47b59186a4e8/README.md).

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

## Diagram of MVC

At the beginning of the project, I used this diagram to help me plan my flow.
![](https://github.com/clarepins/news-summary-challenge/blob/master/news_app_diagram.JPG)
