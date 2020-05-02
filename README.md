# News Summary challenge

## Running the app

Clone or download the repo to your local machine. Then run the following command in the root directory:

```
npm install
npm start
```

## Running the tests

```
npm test
```

## Challenge

To create an application which fetches headlines from the Guardian newspaper API and display them on a single page application. The application should be able to reveal a summary of the article when you click on the headline. This summary should render on the same page.

• Technologies used include JavaScript, CSS and HTML. • Tested using a local framework, created by moi.

## User stories

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

## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## Plan of attack

The required modules are as follows:

* Article: responsible for storing it's headline, image, and text.
* Article list: responsible for storing article objects
* Article list view: responsible for outputting article headlines into html links
* Single article view: responsible for outputting a summary of an article to HTML
* API requester: responsible to handling requests and responses to the Guardian API
* Controller: responsible for directing other modules to render views on the page

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
* [Aylien text summary API docs](http://docs.aylien.com/docs/summarize)
* [Go Make Things Blog](https://gomakethings.com/how-to-use-the-fetch-api-with-vanilla-js/)
* [Makers API](https://github.com/makersacademy/news-summary-api)

## Notes on implementation

It was interesting to go back to API calls. This time I used the helpful advice from this blog:

https://gomakethings.com/how-to-use-the-fetch-api-with-vanilla-js/

on how to use fetch successfully to make the call. Previously I'd only ever achieved it in JQuery, and with a simple callback function in JS.

The advice included using a chained then() method to deal with a successful or unsuccessful request to the API.

It was not necessary in this case to use JSON.parse on the response. Instead we could use the .json() method to extract the json object from the returned stream (which is what the fetch api returned). Calling json parse on the entire response raised an error since it already contained json data.

I ran into some trouble across different browsers. My mapping method was returning the correct result in Firefox but not in Chrome. After several hours of debugging, I worked out that the error was resulting in the order of the API request call. Moving the call to update the inner HTML inside that method solved the problem, since the call was able to properly return before it moved on to mapping the results.

## Future additions
* To add dynamic date options to the API call so it always fetched news for today's date.
* To add news summmarys using the single page view model
* To use Bootstrap to style the page
* To write more in-depth tests and practice stubbing with my own test framework
