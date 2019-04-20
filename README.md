# News Summary challenge

## App pictures

### Headlines page

![placeholder]

### Article summary page

![placeholder]

## Installing

Setup instructions

```
//commands
```

## Project overview

App will grab all the headlines from the Guardian newspaper API and display them on a page.  
Clicking on a headline will show a summary of the article.

### Technologies

Single page app built with **JavaScript, CSS and HTML**  
Using **Bootstrap** for quick styling

### Serving your app

App is using a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve the HTML, CSS and JavaScript files.  
Requests are sent to an API to get data from the Guardian and to summarise text.

> The API is hosted on an external server
> Only need a static web server. That's why this type of architecture is called "serverless".

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

## API

### API authentication

- Guardian API
- Aylien text summarisation API. This API's only job is to take your request and add an API key. This way, you don't have to store API keys in your front-end app.

## Testing

### API requests are stubbed due to rate-limited APIs

## API Overview

### Guardian API

- If you wanted to get the content of an article from the Guardian API, this is the cURL request you might make. Notice how it has a query parameter for `api-key`.

```
curl "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=SECRET_API_KEY"
```

To make this request via the Makers News Summary API with cURL, you could do something like this:

```
curl "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"
```

```javascript
//Example of apiRequestUrl
apiRequestUrl =
http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body
```

### Aylien text summarisation API example

If you wanted to use the Aylien API to summarise an article by Bret Victor, this is the cURL request you might make. Notice how it has headers to authenticate with the Aylien API.

```js
//Request example
curl "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html"

//url
apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html"
```

## Resources

- [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
- [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
- cURL [man page](https://curl.haxx.se/docs/manpage.html)
- [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests
