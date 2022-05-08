# News challenge

## Challenge

To create an app that shows the latest news using the Guardian API.

## Project overview

The app will grab the headlines from the Guardian newspaper API and display them on a
page. Clicking on a headline will link the user to the actual article page on the Guardian's website. A search function will allow the user to search for specific articles.

I approached this challenge by using a test driven approach and created the unit tests with Jest:

1. Create a domain model and diagram from the user story
2. Create a failing test (red) in Jest
3. Develop code to result in a passing test (green)
4. Refactor the code and re-test (orange)

## Technologies

JavaScript (with esbuild, jest and jest-fetch-mock module)
CSS
HTML

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

## Getting started

git clone the repo

### API authentication

You'll need to [register and get an API
key](https://open-platform.theguardian.com/access/) to use the Guardian API.

Once you have the API key, please create and save a file in ./src directory named 'ApiKey.js'.

Enter the following within the file: module.exports = 'YOUR KEY HERE';

### Setup

Whilst in the root directory:

1. Enter 'npm install' in the terminal to install the dependencies.

2. Enter 'npm run build' in the terminal to bundle the JavaScript files.

3. Open the HTMl page via the terminal. Mac: 'open index.html' or Linux: 'google-chome index.html'

### Test Code

Run Jest in the terminal with the 'jest' command from the root directory to test the code.
