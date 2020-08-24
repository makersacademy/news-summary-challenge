# News Summary

An app that summarises the news.

## Project overview

Grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

### Technologies

Code is in frontend JavaScript, CSS and HTML.  No backend and no libraries used - just pure JS.

### Serving your app

I used a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server))

## User Stories

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are

As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story

As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story

As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at

As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks

As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```

## Plan
Overall implementation goals:
- [] On page display all news articles from the day, using the Guardian API
- [] Each article will link to the 'full story'
- [] On the main page, the news articles are shortened (to get a snippet on the detail), usin gthe Aylein text summarisation API
- [] A picture is displayed with each article
- [] It works on phone
- [] Animations

Steps:
- [x] Set up folders and test suite, set up http-server.
- [x] Setup some basic html, css template to allow for easy integration once I have stories to list.
- [x] Build business logic of the app.
- [] Look into how the API works, build the controller that deals with requests and queries the the API. (apiRequestUrl)
    Examples of requests:
    * ```curl "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=SECRET_API_KEY"```
    * ```curl "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"```
- [] Work on integrating the API into controller, so I can make a request for news articles and display them on the main page as headlines.


## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## API

So that this project can focus on the front-end, I am using an API that is used to talk to the Guardian API and the Aylien text summarisation API. 

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests
