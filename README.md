# News Summary challenge

README is WIP.

## Project overview

This app  displays all of today's headlines from the Guardian newspaper.  

NOT COMPLETE - Clicking on a headline will show a summary of the article.

### Technologies

This is a single page web app, written in frontend JavaScript, CSS and HTML.

I have used the Jasmine test framework.

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

## Screenshots TODO

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## APIs
### Guardian API
To retrieve the information on today's articles I've used the Guardian API with their test api-key.  

I was unable to use the Makers guardian API as the response was not returning the thumbnail url.  
This isn't ideal, as it means the auth details are in my code.

I have stubbed the API request/response in my testing, so as not to cause unnecessary load to the Guardian API.

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)

### Aylien text summarisation API

Not yet implemented.

* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
