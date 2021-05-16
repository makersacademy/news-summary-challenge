### Serving your app

Project is setup to use VScode's Live-Server extension to provide simple launching and automatic reloading.

## User Stories

```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

```
As a busy politician
So that I can get an in depth understanding of a very important story
I can click a news headline to see a summary and a photo of the news article
```

```
As a busy politician
So I can get a few more details about an important story
I can see click a news article summary title which links to the original article
```

Successes
-----

* Able to have asynchronous JS handle the creation and display of data from an external API
* Able to successfully debug toggle visibility bug despite a lack of error messaging/ information from the program
* Program is able to get and render data all without any back-end JS code

------------------

To improve
-----
* Lack of time and fatigue from previous week meant styling only got as far as a making a basic flex box and a button
* Summary finder method needs refactoring to allow summaries to be loaded with the initial request and stored, so allow more seamless single article rendering


## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests
