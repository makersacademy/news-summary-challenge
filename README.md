## Project overview

![project screenshot](https://i.imgur.com/Si5LnHF.png)

This app grabs headlines using the newsAPI(https://newsapi.org/) and display them on a page.

demo: [https://news-summary-7.herokuapp.com/](https://news-summary-7.herokuapp.com/)

## Steps to run projects

Installation
```
 npm install
```

cd into directory

Adding your newsAPI key

```
apikey = MY_KEY
```
Replace MY_KEY on line 11 with your api key from [newsAPI](https://newsapi.org/)


Customising app to use your news source.
Open model/todays-news.js

```
newsSource = 'the-economist'
```
Replace 'the-economist' on line 11 with any news source of your choice from this list [news sources](https://newsapi.org/sources)


Install http-server 
```
 npm install http-server
```
Run http-server
```
 http-server 
```







### Technologies

Vanilla Javacript. No libraries of frameworks.


### Serving the app

Use static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve app

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

### To be completed: Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)


