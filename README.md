README Edit: My approach and code review
=================

My approach
------
Pre-code:
* As I did not use tests this time, I had to plan all the process better than usual:
- Outline number of methods needed and their task.

Development:
I spent a lot of time researching for this challenge, I came across different obstacles that I solved this way:
- Research about AJAX requests and Asynchronicity in JS (promises was my choice instead of pure callbacks).
- Learn more about arrow functions, as they are tricky and do not understand contextes of the keyword **this**, which created a lot of issues in my code.
- On the contrary, they were a big help in defining promises and resolving them, as sometimes I could not use a function per se, but an arrow function.
- I also researched about Cross-Origin Resource Sharing (CORS), as my browser did not allow me to send the request to Aylien through my own account due to security issues I assume. The explaination I found about the difference between the API of The Guardian and that of Aylien is that The Guardian must have an open cross-domain that can be accessed widely, contrarily to Aylien.
I tried passing the headers with my credentials into a getSummary method (please check this commit: **304d0f09df8deb6fa3fc15ab194ca7b80b405f3c** for more information).

Next focus
------
* Definitely adding some CSS to the project, I run out of time and gave a strong priority to implementation this time as I wanted to learn more about API's in general and how to establish connections, send requests and handle them to get what needs to be extracted from objects.
* I need to try the Makers News API, but it run out of requests very quickly in the morning, so I did not have the chance to do it.
* CORS and Cybersecurity is a topic that interests me and that I would like to explore further. I wish I had had more time in this challenge to try and build something similar to the Makers News API (with credentials, cross-domain requests, an aylien get request...)

Personal code review
------
<i>Overall, I am satisfied with the result because of the following reasons:</i>
* I got to learn more about promises and asynchronicity in JS, which was a pending task for me.
* I am glad I could come up with the idea of slicing the full request body with the whole article body, as I could not access the Makers News API because it run out of requests pretty quickly. So what I came up with more in depth was:
- I sliced the body content (up to 555 characters) and displayed that summary below the title.
- I added a button per every article that, once clicked, would load the whole body and hide the rest of the elements.
This patch serves as a temporary solution, but definitely using Aylien would be optimal, as some of the 'summarised' articles look a bit strange as there are some unfinished sentences.

<i>Things I am not very happy about:</i>
* Mainly, I am not happy about choosing a wrong approach because I did not plan well enough beforehand. I tried to stick to many wrong approaches, therefore becoming stuck many times without much hope. I had to start over several times, but thinking about every small step that was taken toward the objective.
* I felt lost at some point as I was not guided by TDD for this challenge. The main reason is we were not allowed to use external libraries and, also, because the testing framework we built durint the week was not ready to implement feature tests for this challenge.
We were not supposed to write any JS backend either.

Additional comments
------
* I am aware of the fact that I need to hide my API credentials. I have done it in the last commit. I did not do it in the previous ones as I wanted to speed up the process of commiting (and keep developing the good practice of commiting often).
I was thinking about using an ENV variable to hide away API credentials implementation, but this would prevent other users from using it too.

Screenshots
------
![News](/public/news-screenshot.png?raw=true)

------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------

# News Summary challenge

* Feel free to use Google, your notes, books, etc. but work on your own.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* If you have a partial solution, **still check in a partial solution** and send in a pull request.
* You must submit a pull request to this repo with your code by 9am Monday morning.

## Challenge

As usual please start by forking this repo.

You'll create an app that summarises the news.

### Guidance

Make sure to look at this [guidance](https://github.com/makersacademy/course/blob/master/further_javascript/frontend_single_page_app_guidance.md)!  It'll help you point yourself in the right direction when you're figuring out how to implement some of the trickier things.

## Project overview

Your app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

### Technologies

You'll write a single page web app.  You'll write your code in frontend JavaScript, CSS and HTML.  You won't use Ruby or backend JavaScript.

**And, as is the theme for this week, you won't use any libraries or frameworks!**

But, feel free to use the test framework you wrote during the week!

### Serving your app

You'll use a static web server (e.g. [http-server](https://www.npmjs.com/package/http-server)) to serve your HTML, CSS and JavaScript files.  You'll send requests to an API to get data from the Guardian and to summarise text.

> The API is hosted on an external server that you don't have to worry about.  You only need a static web server.  That's why this type of architecture is called "serverless".

## User Stories

Some of these stories will need decomposing if they seem too large.

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can see a relevant picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

```
As a busy politician
I can click a news headline to see a summary and a photo of the news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see click a news article summary title which links to the original article
So I can get a few more details about an important story
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

### API authentication

So that this project can focus on the front-end, we've provided an API that you can use to talk to the Guardian API and the Aylien text summarisation API.  This API's only job is to take your request and add an API key.  This way, you don't have to store API keys in your front-end app.

> Why is it bad to store API keys in your front-end?  If we hadn't provided this API for you to use, how would you avoid this?

### API request rate limits and stubbing

The Guardian and Aylien text summarisation APIs are severely rate-limited.

**Please stub your tests so we don't exceed the daily limit.  Otherwise, all requests will be rejected and everyone's apps will stop working!**

### API Overview

The basic idea is to send an `apiRequestUrl` query parameter to the News Summary API.  The value of this parameter is the URL of the request you *would* have made to the Guardian or Aylien API, minus any API credentials.

### Guardian API example

**Please stub your tests to avoid exceeding the API rate limit**

If you wanted to get the content of an article from the Guardian API, this is the cURL request you might make.  Notice how it has a query parameter for `api-key`.

```
curl "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=SECRET_API_KEY"
```

To make this request via the Makers News Summary API with cURL, you could do something like this:

```
curl "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"
```

Note how the `apiRequestUrl` parameter value is just the request you would have made to the Guardian API, minus `api-key`.

### Aylien text summarisation API example

**Please stub your tests to avoid exceeding the API rate limit**

If you wanted to use the Aylien API to summarise an article by Bret Victor, this is the cURL request you might make.  Notice how it has headers to authenticate with the Aylien API.

```
curl "https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html" \
  -H "X-AYLIEN-TextAPI-Application-ID: APPLICATION_ID" \
  -H "X-AYLIEN-TextAPI-Application-Key: SECRET_APPLICATION_KEY"
```

To make this request via the Makers News Summary API with cURL, you could do something like this.

```
curl "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html"
```

Note how the `apiRequestUrl` parameter is just the request you would have made to the Aylien API.  Notice how you don't have to send authentication headers.

### Code

If you're interested, you can see the code for the News Summary API in this repo: https://github.com/makersacademy/news-summary-api

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* cURL [man page](https://curl.haxx.se/docs/manpage.html)
* [Hurl](https://www.hurl.it/), a web interface for sending HTTP requests
