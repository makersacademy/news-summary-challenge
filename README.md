# News Summary challenge

Daily Guardian is a frontend, single page app that summarises the top 10 guardian articles daily for your convenience.

![Daily Guardian](/images/daily-guardian.png)

More specifically, this app grabs all the top 10 headlines from the Guardian newspaper API and displays them on a page. Clicking on a headline will show a summary of the article.

This app was written entirely in frontend JavaScript, CSS and HTML.

## How to use Daily Guardian

Firstly, if you do not have Node and npm installed. Please do the following:

## Installing Node

In your terminal, run:

    $ node -v

If you get a message that says `node: command not found`, run:

    $ brew install node

npm will automatically be installed when you install node.

## To run this app on your computer, complete the following steps:

1. Fork this repository, and clone it to your local machine.
2. In your terminal, make sure you are in the root directory 'news-summary-challenge' and run the command ‘npm install’
3. When the installation completes, you may type 'open index.html' to open the app.

Alternatively to step 3, if you would like to use a http server to run the app, you can follow the steps below:

1. In your terminal, make sure you are in the root directory 'news-summary-challenge'.
2. Type in the command `npm install http-server --save`
3. Open the server with the following command `node node_modules/http-server/bin/http-server`
4. You can then go to a browser of your choice (Google Chrome is recommended) and type 'http://localhost:8080/' to view the app.


## User Stories

The following user stories were used to create the app.

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

## Resources used

This app makes use of an API provided by Makers Academy that you can use to talk to the Guardian API and the Aylien text summarisation API. This API's only job is to take your request and add an API key. More information about each of these API's can be found below:

* [Makers News Summary API](https://github.com/makersacademy/news-summary-api)
* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
