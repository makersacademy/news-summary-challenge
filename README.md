# News Summary challenge

This is an unfinished vanilla, OO Javascript project that is centered around pulling news articles from popular news websites using their API. I have finished the logic for this project that consists of creating new articles, adding them to a list, requesting the articles by ID and listing out all of the articles that are stored in the Article List.

Next steps for this project would be to add views for the Article List and Article classes and hook them up to the news summary APIs.

This project was built using a custom JavaScript testing library that was creating during Makers Academy week 7, this was modelled to closely resemble Jasmine.


## Project overview

Your app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

### Technologies

You'll write a single page web app.  You'll write your code in frontend JavaScript, CSS and HTML.  You won't use Ruby or backend JavaScript.

**And, as is the theme for this week, you won't use any libraries or frameworks!**

But, feel free to use the test framework you wrote during the week!

### Serving your app

You'll use a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve your HTML, CSS and JavaScript files.  You'll send requests to an API to get data from the Guardian and to summarise text.

> The API is hosted on an external server that you don't have to worry about.  You only need a static web server.  That's why this type of architecture is called "serverless".

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

## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)
