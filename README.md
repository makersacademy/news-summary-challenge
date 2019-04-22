# News Summary challenge

Approach detailed [here](https://github.com/micosmin/news-summary-challenge/blob/master/APPROACH.md)

## Try the app at this link

https://micosmin.github.io/news-summary-challenge/

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

However, the the api this app is calling is set to only accept request coming from the application itself - link below.  
App is also accessible at this link: https://micosmin.github.io/news-summary-challenge/

## Project overview

App retrieves headlines from the Guardian newspaper API and displays them on a page with pictures and links towards a summary page and the full page article on Guardian.

Clicking on the summary button will direct the user to a #summary page where a summary of the article is retrieved from the Aylien API

## Technologies used

JavaScript / CSS / HTML  
Node.js / Express  
Heroku

### Frontend

Single page app built with **JavaScript, CSS and HTML**  
Using **Bootstrap** for quick styling  
Using **ESlint** for static analysis of code to check adherence to style guidelines
Using own testing framework for TDD unit tests. Check it out at this [link](https://github.com/micosmin/news-summary-challenge/blob/master/services/testing-framework.js)

Front end app is using a static web server ([http-server](https://www.npmjs.com/package/http-server)) to serve the HTML, CSS and JavaScript files. I've set up a script in the package.json to start the serveer by running `npm start`

When user hits '/' route a request is sent to my API hosted on Heroku which sends a get request to the Guardian API. Once that request is fulfilled, my api sends back in json format to the front end api which calls several helper methods to build the html page based on that response.

There is a similar process happening when the summary button is clicked. The only difference is that the Aylien api is called in this case.

### Server

API:

- Built in node.js and express
- Hosted on Heroku
- Frontend page makes calls to this server at 2 specific routes (articles and summary)
- Server handles requests to Guardian API and Aylien API as well as the authentication
- Uses CORS policy to only allow access to the get request of the server if it is coming the app itself

## Testing

Built own framework to test JS objects.  
It uses describe, it, expect to build the tests.

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

For testing purposes this server is run locally, however it is deployed on Heroku as well and can be accessed from there as well.

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
