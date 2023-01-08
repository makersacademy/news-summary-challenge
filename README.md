# News challenge

## Solo Project

After learning how to use Javascript to build programs running in `node`. In week 7 of the Makers course we started to use Javascript to bring web pages alive with interactivity. We began to develop full-blown applications running inside the user browser, while leveraging what we've learned so far about JS to communicate with backend APIs.

## Learning objectives

- Test-drive a simple Javascript program running in a web browser, using modern JS build tools.
- Use the DOM API to manipulate the web page structure and content.
- Use `fetch` to send HTTP requests to a remote server.

As a weekend solo project, we were tasked to build a Javascript program running in a web browser using all of these new concepts.

## Project overview

Your app will grab all the headlines from the Guardian newspaper API and display them on a
page. Clicking on a headline will link the user to the actual article page on the Guardian's website.

See [instructions](instructions.md) for full details.

## How far did I get?

I was able to TDD a working single page web app with the following functionality

- Features

  - [ ] Display a list of article titles
  - [ ] Display a corresponding picture to illustrate each news article
  - [ ] Added link to each article title which links to the original article
  - [ ] Added search input and button which displays articles matching this search
  - [ ] Added CSS

- Screenshot

### Headline page

![Headlines page screenshot](./images/news-summary-project-headlines-page-screenshot-one.png)

## Installation/Usage Instructions in README

See instructions for how to download the project and run the tests:

```sh
$ git clone https://github.com/ChrisHutchinson1982/news-summary-challenge.git
$ cd bowling-challenge
$ npm install
$ jest
```

To view the webpage, you'll need to [register and get an API
key](https://open-platform.theguardian.com/access/) to use the Guardian API.

Create an apiKey.js file to store this:

```bash
# You can run this from your terminal,

$ touch apiKey.js
```

Copy this code into the file and replace test with your Guardian API.

```bash
# apiKey.js

const apiKey = "test";

module.exports = apiKey;
```

To open the HTML file in your browser:

```bash
# You can run this from your terminal,
# or alternatively double-click on the HTML file
# from the file explorer (Finder, on mac).

$ open index.html
```

### Technologies

- Page web app developed using frontend JavaScript, CSS and HTML.
- Jest to write tests
- The [`jest-fetch-mock`](https://www.npmjs.com/package/jest-fetch-mock) module to mock `fetch` requests so don't request the API when running tests
- A build tool `esbuild` to bundle files together
