# News Summary Challenge

This will be an app that collects headlines from the Guardian newspaper API.  The app will display the headlines on a webpage as links to a summary of the article.

## Run the app

use [http-server](https://www.npmjs.com/package/http-server) from the command line:
```shell
$ npm install http-server --save
$ npx http-server
```
or [live-server](https://www.npmjs.com/package/live-server) from the command line:
```shell
$ npm install live-server --save
$ npx live-server
```

### In the console

![](https://thepracticaldev.s3.amazonaws.com/i/1s50acblqwttreissgmk.png)

The top of the console shows all passing tests.
Underneath I've created a Newslist with three headlines, and displayed them in the browser window on the right.

## Technologies

Everything will be written in frontend JavaScript (including tests), CSS, and HTML.

The API is hosted on an external server.

I'm using a static web server '[http-server](https://www.npmjs.com/package/http-server)' to serve the files.

## Approach

Built with TDD, without using libraries or frameworks (other than anything I build myself :wink:).

I'm using a live-server for a faster feedback loop during development.

### User Stories

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

<!-- ```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
``` -->

<!-- ```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
``` -->

<!-- ```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
``` -->

<!-- ```
As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks
``` -->

<!-- ```
As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
``` -->

### Mockups

#### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

#### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## References

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
