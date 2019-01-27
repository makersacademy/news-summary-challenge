# News Summary challenge #

## Challenge ##

You'll create an app that summarises the news from the Guardian API.<br/>
Your app will grab all the headlines from the Guardian newspaper API and display them on a page.<br/>
Clicking on a headline will show a summary of the article.

### Technologies ###

* frontend JavaScript
* HTML

### Serving your app ###

You'll use a static web server to serve your HTML, CSS and JavaScript files.<br/>
You'll send requests to an API to get data from the Guardian and to summarise text.

## User Stories ##

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

## Mockups ##

### Headlines page ###

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page ###

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## API ##

### API Overview ###

The basic idea is to send an `apiRequestUrl` query parameter to the News Summary API.<br/>
The value of this parameter is the URL of the request you *would* have made to the Guardian.

## What I have built ##

My solution is more than partial.<br/>
I have built the UI (in HTML) which is displaying the title of the page only.<br/>
I have build the code to send the request to the API on a javascript script.<br/>
However, I get an error which says that in the *response* hash, the keys are undefined when I am trying to access to any of their values.<br/>
So when I am trying to access to the key *results* which is an array of hashes (each hashes is an articles), I cannot access to it.<br/>
Which block me in my intention to loop through it, to then have access to each hashes and in each hashes to have access to the *webTitle* key, to display the main headlines.<br/>
After hours and hours of researches, I did not manage to fix this, nor to go further in the challenge.<br/>

## Resources ##

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
