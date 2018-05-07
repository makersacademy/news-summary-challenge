News Summary challenge
=================

[Check project online](http://guardians_news_summary_challenge.surge.sh/)

Task:
-------
The purpose of the progect is to write a single page web app using only frontend JavaScript, CSS and HTML. We would not use Ruby or backend JavaScript.
The app will grab top 10 headlines from the [Guardian newspaper API](http://open-platform.theguardian.com/documentation/) and display them on a page.  Clicking on a headline will show a summary of the article using the [Aylien API](https://docs.aylien.com/textapi/#getting-started).

User Story:
-------

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

Technologies used:
-----
* Static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve HTML, CSS and JavaScript files;
* API: [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/);
* API: [Aylien text summary API docs](http://docs.aylien.com/docs/summarize);
* node JS 8.9.4;
* css.

Run project:
-----
* Local on your machine: Clone this project, use [http-server] or open ```index.html``` in Browser.
* Onlinel: use this [link](guardians_news_summary_challenge.surge.sh)
* In order to run tests, clone project, install node JS and open file ```index.html``` in Browser.
* In order to see if tests are passing, open console in View --> Developer Tools.

## Warning: API limits
The Guardian and Aylien text summarisation APIs are severely rate-limited. The app would not work if limits are exceeded.

Result:
-------

### The app has folowing structure:
* `Lib`: containes News model;
* `Views`: contains News representation scenarious:
    * List View
    * Single View
* `Controllers`: sending requests to API's, getting respond form API's and communicate with Index.html;
* `Index.html`: app interface;
* `Tests`: containes tests for Views and Lib files;

### For this project two differen APIs were used:
1. [Guardian API](http://open-platform.theguardian.com/documentation/): to parse world news and acsess id, title, url and image.
2. [Aylien](http://open-platform.theguardian.com/documentation/): to transform Guardian news acsessed by url to 10 sentenses summary information.

In controller `NewsController.js`:
1. In order to manage API we have created two functions `displayNews` and `getSummary` that sending requests to Guardian API and Aylien API.
1. In order to transform JSON response to objects we have created two functions `parseGuardiansResponseJSON` and `parseAylienResponseJSON`.
1. In order to get right view representation on our `Index.html` we used view models that transform our news to strings that displays on `Index.html`.
In order to be able to see news on `Index.html` we used function `window.onload` and run inside two funtions:
    * `displayNews` that displays titles and images of top 10 Guardian news and
    * `startListeningForHashChange` that displays a summary of selected news when user clicks on title.


