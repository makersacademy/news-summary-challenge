# News Summary challenge

* Challenge time: 5 hours

## Project overview

This app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

## Technologies

This is a single page web app.  The code is written in frontend JavaScript (vanilla), CSS and HTML, and pulls data from two APIs.  

**No Javascript library or framework is used.**

I have used a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve the HTML, CSS and JavaScript files.  I will send requests to an API to get data from the Guardian and to summarise text.


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

## API

Two APIs are used in this challenge.

### Guardian API

The API is used to extract content of a number of articles from the Guardian.  This is the cURL request.  Notice how it has a query parameter for `api-key`.

```
curl "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=SECRET_API_KEY"
```

To make this request via the Makers News Summary API with cURL, you could do something like this:

```
curl "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"
```

Note how the `apiRequestUrl` parameter value is just the request you would have made to the Guardian API, minus `api-key`.

### Alyien text summarisation API

The Aylien API is used to summarise articles from any full text included in a URL directed to it. This is the cURL request.  Notice how it has headers to authenticate with the Aylien API.

```
curl "https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html" \
  -H "X-AYLIEN-TextAPI-Application-ID: APPLICATION_ID" \
  -H "X-AYLIEN-TextAPI-Application-Key: SECRET_APPLICATION_KEY"
```

To make this request via the Makers News Summary API with cURL, I could do something like this.

```
curl "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html"
```

Note how the `apiRequestUrl` parameter is just the request one would have made to the Aylien API.  Notice how I don't have to send authentication headers.

## Install

```
git clone https://github.com/elizabethcsw/news-app.git
cd news-app
npm install
http-server
```

Then, visit http://localhost:8080/

## Resources

* [Guardian newspaper API ](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API ](http://docs.aylien.com/docs/summarize)
* [Makers Academy News Summary  API github](https://github.com/makersacademy/news-summary-api)
* [cURL man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests
