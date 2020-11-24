# News Summary Challenge

![siteGif](siteGif.gif)

## Challenge overview

The single-page pure Javascript application grabs all the headlines from the Guardian newspaper API and display them on a page.  
Clicking on a headline will show a summary of the article.

## Design

![Sequence diagram](diagram.svg)

### Technologies

- Pure front-end JavaScript, CSS and HTML
- Custom-written Javascript TDD framework
- Serverless architecture 
- Client for URLS (cURL)

##### 3rd party API Integration

- Aylien News Intelligence API
- Guardian News API


### Run tests

- Open `spec/SpecRunner.html` in browser


### Run the app

- Execute command `npm install` via command-line.
- Execute command `http-server` from project root and navigate to 

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

### Headlines page

![Headlines page mockup](images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](images/news-summary-project-article-page-mockup.png)

