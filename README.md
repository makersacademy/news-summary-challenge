<h1 align="center">NEWS HEADLINES</h1>

<div align="center">

   ![news headlines gif](./images/news-headlines-gif.gif)
</div>

## Task

This was a Makers weekend challenge to build a single page web app that shows the latest news using the Guardian API.

## Usage

### API authentication

You'll need to [register and get an API
key](https://open-platform.theguardian.com/access/) to use the Guardian API with this app. 

### Web app
1. Fork and clone this repo.
1. In the command line in the repo's root directory, run `npm install`.
1. Set `API_KEY` to [your personal API key](https://open-platform.theguardian.com/access/).
1. In the repo's root directory, enter: `open index.html`.

You can now use the app to browse and search for the articles of your choice!

## Features

The main features of this app are grabbing headlines from the Guardian newspaper API to be displayed on the page as well as being able to click on the headlines to be taken to the actual article on the Guardian website. You also have the option of filtering the list of articles by entering a search query.

## Technologies

- JavaScript
- CSS
- HTML
- Jest
- jest-fetch-mock
- fetch
- esbuild

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
So I can get a few more details about an important story
I can click a news article title which links to the original article
```

```
As a busy politician
So I can search what I want to read about
I can specify a search query on the page and get articles matching this search
```

## Testing

This app was built using TDD.<br>
### Run tests
In the repo's root directory, run:
1. `npm install`
1. `npm run test`

## Resources

* [Guardian newspaper API homepage](http://open-platform.theguardian.com/documentation/)
