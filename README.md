# News Summary challenge

Your app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

### Serving your app

```
$ npm install --global http-server
$ git clone git@github.com:kikidawson/news-summary-challenge.git
$ cd news-summary-challenge
$ npx http-server
```
visit localhost:8080 in your browser

## User Stories

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
I can click a news article summary title which links to the original article
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

## API

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* Makers News Summary API

## Planning

### Todo

- impliment aylien api

### Done

- first user story (headlines from Guardian API)
- removed API key by using Makers News Summary API
- user story 2 - show image
- make headline clickable (hash change)
- see body of article
- see image from article
- modal
- clickable link to Guardian
