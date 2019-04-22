# News Summary challenge

Approach detailed [here](https://github.com/micosmin/news-summary-challenge/blob/master/APPROACH.md)

## App pictures

### Headlines page

![Main](https://github.com/micosmin/news-summary-challenge/blob/master/images/Screenshot%202019-04-22%20at%2014.44.02.png?raw=true)

### Article summary page

![Summary](https://github.com/micosmin/news-summary-challenge/blob/master/images/Screenshot%202019-04-22%20at%2014.44.55.png?raw=true)

## Installing

Setup instructions

Clone repo:

`https://github.com/micosmin/news-summary-challenge.git`

Install dependencies
`npm-install`

Run local server
`npm start`

Go to to local server at port 8080:
`127.0.0.1:8080`

## Project overview

App will grab all the headlines from the Guardian newspaper API and display them on a page with picture and link towards a summary page.  
Clicking on the summary button will show a summary of the article on a different page #

As the API is hosted on heroku or run locally from my machine access is not immediate upon downloading this repo

### Technologies

### Frontend

Single page app built with **JavaScript, CSS and HTML**  
Using **Bootstrap** for quick styling  
Using **ESlint** for static analysis of code to check adherence to style guidelines
Using own testing framework for TDD unit tests

Front end app is using a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve the HTML, CSS and JavaScript files.  
Requests are sent to an API to get data from the Guardian and to summarise text.

### Server

API:

- Built in node.js and express
- Hosted on Heroku
- Frontend page makes calls to this server at 2 specific routes (articles and summary)
- Server handles requests to Guardian API and Aylien API as well as the authentication
- Uses CORS policy to only allow access to the get request from one source

> The API is hosted on an external server
> Only need a static web server. That's why this type of architecture is called "serverless".

## Testing

Built own framework to test js objects.  
It uses describe, it, expect to build the tests

It has available the following matchers:

- equal
- toBeInstanceof
- toRespondTo
- length

[Testing framework repo link](https://github.com/micosmin/news-summary-challenge/blob/master/services/testing-framework.js)

Testing is done by running the following command `node test`

## API Overview

I'm using my own server built with node/express to access the guardian api.
[link to repo]

For testing purposes this server is run locally, however it is deployed on heroku as well and can be accessed from there as well.

**Guardian articles**

Request is sent via an XMLHttpRequest() to the following endpoint on the server:  
`local-route/articles`

The output is passed to a helper method which renders the page with all the articles retrieved form the api (api uses pagination: retrieving 10 articles at a time)

### Accessing Aylien text summarisation API example

Request is sent via an XMLHttpRequest() to the following endpoint on the server:  
`local-route/summary`

The output (usually an array of strings) is passed back to the frontend api which uses helper methods to process the response and build the page

```

## Resources

- [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
- [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
```
