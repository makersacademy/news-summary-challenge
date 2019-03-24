# Weekend Challenge (Week 7): News Summary

[Original README](./news-summary.md)

## Initial Model

![initial model](./images/news-summary.svg)

## User Stories

Some of these stories will need decomposing if they seem too large.

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

## Requirements

### Functional requirements

- App lists headlines
  - with a picture
  - can click to view article summary
- Article summary includes link to original article

### Non-functional requirements

- App should be *responsive* and display comfortably on a phone as well as on a computer display.
- App has animations ("*whizzy animations*")

## An Initial Feature

- On loading, the app should show the headlines

## Issues

- Attempting to make a request via the Makers News Summary API, I just get "Invalid authentication credentials". Perhaps the API that it is using is indeed invalid or expired?
  - Worked around this by signing up for my own API key and using the Guardian API directly.
  - Not being able to use the Makers API, but still wanting to manage complexity, I am using my own API key directly in the frontend. Ideally, I would use dotenv and load credentials from a .env file, but that complicates development and testing.
- Populating storiesArray via HTTP requests with `XMLHttpRequest.onreadystatechange`, noticed it was doing it twice. Realised that get triggered twice since it fires on *any* ready-state change. Using `onload` to be more specific
- Async issue? HeadlinesView.renderHTML doesn't have access to the populated array...

## Resources

- [Making HTTP requests](https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa)
- [More about HTTP requests](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [Making sure StoryModel parameters are correctly assigned](http://2ality.com/2011/11/keyword-parameters.html)