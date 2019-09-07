# News Summary challenge

## User Stories

### US1
```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```

### US2
```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

### US3
```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

### US4
```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```

### US5
```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
```

### US6
```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```

## First Thoughts
This project comes with some limitations. We are not allowed to use any libraries and therefore have to create our own test environment from scratch as well as avoiding the use of jQuery. Everything should be built in front end JS.

I will need to start by creating my test environment. I would like to build on what I learnt in the week by adding proper matchers as well as a nice display to my specRunner.

After this I will play around with the Guardian API to ensure that I'm aware of the actual information which will be supplied. This could probably be done mainly in feature testing.

Looking through the user stories I have a vague idea of how I would like my models to look. I will have news and newsManager classes. Most of the work could probably be done in the dom but I would like to make it easier to test drive my product as well as give me more opportunities for extension.

News will store information taken from the API. I will need to make use of a headline, the full article and a headline picture.

Newsmanager will store all of the News objects as well as being responsible for displaying them all. Newsmanager can switch between displaying a single article or all of the headlines. This is a new way of approaching the issue as we simply hid all of the items we were not using in my previous project, notes.

Once I have the above models set up then I should be at the state that Use stories 1 through 4 should be solved. At that point I can attempt to improve the styling to be comfortably viewed on a phone as well as adding some animations.


## Mockups

* Challenge time: rest of the day and weekend, until Monday 9am.
* Feel free to use Google, your notes, books, etc. but work on your own.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* If you have a partial solution, **still check in a partial solution** and send in a pull request.
* You must submit a pull request to this repo with your code by 9am Monday morning.

## Challenge

As usual please start by forking this repo.

You'll create an app that summarises the news.

### Guidance

Make sure to look at this [guidance](https://github.com/makersacademy/course/blob/master/further_javascript/frontend_single_page_app_guidance.md)!  It'll help you point yourself in the right direction when you're figuring out how to implement some of the trickier things.

## Project overview

Your app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

### Technologies

You'll write a single page web app.  You'll write your code in frontend JavaScript, CSS and HTML.  You won't use Ruby or backend JavaScript.

**And, as is the theme for this week, you won't use any libraries or frameworks!**

But, feel free to use the test framework you wrote during the week!

### Serving your app

You'll use a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve your HTML, CSS and JavaScript files.  You'll send requests to an API to get data from the Guardian and to summarise text.

> The API is hosted on an external server that you don't have to worry about.  You only need a static web server.  That's why this type of architecture is called "serverless".

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## API

### API authentication

So that this project can focus on the front-end, we've provided an API that you can use to talk to the Guardian API and the Aylien text summarisation API.  This API's only job is to take your request and add an API key.  This way, you don't have to store API keys in your front-end app.

> Why is it bad to store API keys in your front-end?  If we hadn't provided this API for you to use, how would you avoid this?

### API request rate limits and stubbing

The Guardian and Aylien text summarisation APIs are severely rate-limited.

**Please stub your tests so we don't exceed the daily limit.  Otherwise, all requests will be rejected and everyone's apps will stop working!**

### API Overview

The basic idea is to send an `apiRequestUrl` query parameter to the News Summary API.  The value of this parameter is the URL of the request you *would* have made to the Guardian or Aylien API, minus any API credentials.

### Guardian API example

**Please stub your tests to avoid exceeding the API rate limit**

If you wanted to get the content of an article from the Guardian API, this is the cURL request you might make.  Notice how it has a query parameter for `api-key`.

```
curl "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=SECRET_API_KEY"
```

To make this request via the Makers News Summary API with cURL, you could do something like this:

```
curl "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"
```

Note how the `apiRequestUrl` parameter value is just the request you would have made to the Guardian API, minus `api-key`.

### Aylien text summarisation API example

**Please stub your tests to avoid exceeding the API rate limit**

If you wanted to use the Aylien API to summarise an article by Bret Victor, this is the cURL request you might make.  Notice how it has headers to authenticate with the Aylien API.

```
curl "https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html" \
  -H "X-AYLIEN-TextAPI-Application-ID: APPLICATION_ID" \
  -H "X-AYLIEN-TextAPI-Application-Key: SECRET_APPLICATION_KEY"
```

To make this request via the Makers News Summary API with cURL, you could do something like this.

```
curl "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html"
```

Note how the `apiRequestUrl` parameter is just the request you would have made to the Aylien API.  Notice how you don't have to send authentication headers.

### Code

If you're interested, you can see the code for the News Summary API in this repo: https://github.com/makersacademy/news-summary-api

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests
