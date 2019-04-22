### Goal
I am triying to write a single page web app that summarises the news from The Guardian.

### Technologies

I will write the code in frontend in pure JavaScript, CSS and HTML (not using any libraries or frameworks). I decided not do TDD for this challenge.

### Serving the app

I will use a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve my HTML, CSS and JavaScript files.  I will send requests to an API to get data from the Guardian and to summarise text.

## User Stories

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

## Resources (API)

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests
