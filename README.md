# News Summary Project
## Project overview

This app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article. You can find the original challenge [here](https://github.com/makersacademy/news-summary-challenge).

### Technologies

- JavaScript
- HTML
- CSS
- HTTP-SERVER
- Custom built test framework

### Process
My approach to building this app will be to first model out the domain of what I think the final project will vaguely look like. This helps me visualise the interactions between models, views, and the controller. This will also help me to decide my entry point and give me something to reference when I feel stuck. I edit the readme, add my hand built test framework and from there start to TDD my models and views. The controller I've decided to spike because I'm not exactly sure how it will all come together and I want the freedom to move things around.

I've also sorted the user stories below it to what I consider a MVP and stretch goals.

## User Stories

These I will consider my MVP.

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

These I will consider my stretch goals.

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

## API

The app will be using the following API's:

Guardian
* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)

Aylien
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
