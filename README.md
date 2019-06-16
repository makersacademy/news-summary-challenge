# News Summary challenge

## Description

This is the result of the 7th weekend challenge for submission to Makers Academy. It is a single page web application that retrieves headlines from the Guardian Content API and displays them on the page.

## Getting Started

1. Clone this repo to your local machine using `git@github.com:EdinaBMakers/news-summary-challenge.git`
2. If you are using [Visual Studio Code](https://code.visualstudio.com/), open the `index.html` with Live Server (it can be installed as an extension).

  OR

2. You need a static web server, like [http-server](https://www.npmjs.com/package/http-server)

    To install http-server:

        1. cd root/of/your-project/
        2. npm install http-server --save

    To run http-server:
    
        1. node node_modules/http-server/bin/http-server

## User Stories

In the current version the following user story is implemented:

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

Other stories might be implemented in later versions:

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
## Technologies

In accordance with the challenge requirements, no libraries or frameworks has been used for the implementation, only plain JavaScript and Html.

## Resources

* [Guardian Content API](http://open-platform.theguardian.com/documentation/)

## Guardian Content API

The application retrieves headlines from the Guardian Content API via asynchronous `XMLHttpRequest`s.

For more details about the API, please visit the [Guardian Content API](http://open-platform.theguardian.com/documentation/).

### API authentication

To access the API, a valid API key has to be sent with every requests. The current version of the application uses an apiKey variable (which is not exposed in the project). In future versions the API key will be stored securely. To sign up for an API key, please visit the [Guardian Content API](http://open-platform.theguardian.com/documentation/).

## Testing

The challenge has been tested and written in TDD, using my own testing framework. 

To see the test results open the [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) with `F12` on the index.html page.

Based on the API key, the Guardian Content API can be severely rate-limited, therefore `XMLHttpRequest`s are stubbed in the test suites.