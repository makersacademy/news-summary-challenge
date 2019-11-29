# The Nooze Button

## Summary

Weekend challenge to create an app that displays headlines and summarises the
news.

It grabs all the headlines from the Guardian newspaper API and displays them on
a page. Clicking on a headline shows a summary of the article.

## Technologies

Code is written in frontend JavaScript, with a little HTML and CSS. I intend to
use ES6 syntax as much as possible, to build up my familiarity.

Tests are written using a testing framework I developed during the week - see
the tests folder and the 'helpers' file to get a view of this framework.

I'm using a static web server [http-server](https://www.npmjs.com/package/http-server) to serve my HTML, CSS and JavaScript files.
To do the same, run:  

`npm install http-server -g`

This will allow you to run the server directly from the command line with
`http-server`

Requests are sent to the Makers News Summary API. This adds API credentials and
makes the request to the relevant place:
* Guardian API to get data  
* Aylien to summarise text  

## Resources

* Makers Academy [guidance](https://github.com/makersacademy/course/blob/master/further_javascript/frontend_single_page_app_guidance.md) on creating a frontend single page app.
* Makers Academy [notes on APIs](https://github.com/emmavanoss/news-summary-challenge/blob/master/api-notes.md)
* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests

## User stories

Implemented:

To implement:

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


## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

