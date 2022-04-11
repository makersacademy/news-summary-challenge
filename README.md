# News Summary Challenge
[![Test](https://github.com/ruiined/bowling-challenge/actions/workflows/test.yml/badge.svg)](https://github.com/ruiined/news-summary-challenge/actions/workflows/testing.yml)
[![codecov](https://codecov.io/gh/ruiined/news-summary-challenge/branch/main/graph/badge.svg?token=8CBJ747V7A)](https://codecov.io/gh/ruiined/news-summary-challenge)

This challenge was to help us get familiar with fetch APIs. It proved to be quite challenging, as it required a lot of trial and error to be able to set the project up and running safely, without exposing the api key. That being said, it has been a great learning curve and I've learnt a lot.

## How to Install
1. Clone this repository to your machine
2. `cd news-summary-challenge`
3. `npm i`
4. Create your own `.env` file. Get a personal API key from Guardian and put it in the file:
```
API_HOST=https://content.guardianapis.com
API_KEY=your_key_goes_here
```

## How to Run
1. `npm run build`
2. `npm start` & leave it running in a terminal
3. `open index.html`

## How to Test
1. `npm test` will have both jest & coverage included

## Screenshots

## User Stories

```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
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

```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```


## Resources
[Makers](https://github.com/makersacademy/news-summary-challenge)
[Search Icon](https://www.flaticon.com/free-icon/loupe_1296902?related_id=751463&origin=search)