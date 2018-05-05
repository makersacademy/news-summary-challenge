# News Summary Challenge

The aim of this weekend challenge is to create an app that grabs the headlines of the Guardian newspaper API and displays it on a page.

Clicking on the headline will show a summary of the article.

### Planning / MVP

The README provided by Makers already includes a nice collection of user stories for us to work through.

The MVP would ideally be able to display a list of un-clickable text headlines on an unformatted HTML page, pulled from the API, and then a link to the Guardian website.

### Test Framework

Taking inspiration of the test framework that my group wrote over the notes challenge, it would be able to do a simple `toEqual` expectation. It will also have `describe` and `it` functions to wrap the expectations for better clarity and ease of use so that other's can jump on without learning much.

### Researching APIs

Due to my lack of knowledge of how APIs work, I will first attempt to access the Guardian API to see what kind of raw data it outputs. I will first need an understanding of what kind of raw information I will be working with before I write the tests.

https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction

### Spiking a `index.html`

I will first spike some code and get `http-server` working.
From there, I'll do some mock "data" to get an idea of how it would look like on the site.
 I'll attempt to access the API.
