# News Summary Challenge

This is a news summary app using the Guardian API. It defaults to the top 10 current headlines of the day and the user has the option to select from a drop down menu including Sports and Technology etc. The user can click on the articles' image to preview a short summary of the article, or clicking on the title will take you to the full article on the Guardian website.

## Setup

Fork and clone the repo. Sign up for Aylien and add your API key and API ID to the summarise.js file.

Run, in your terminal:
```
npm install -g http-server
```
Run, in your project root:
```
http-server
```
visit:
```
localhost:8080/news.html
```
## Technology

The app uses the Guardian API and the Aylien Text API to summarise the articles:
```
 https://open-platform.theguardian.com/documentation/
 https://docs.aylien.com/textapi/#getting-started
```
It would use the test-sweet framework had I built any tests.
```
https://github.com/rbbri/sweet
```

## Improvements

- I have struggled to test the project. I intended to use the test-sweet framework but got stuck with knowing what to test and how. I will acome back to this.
- I intend to improve the search options with either a search bar or a fully equipped navigation bar.
- I will add add the photo and title of the article to the summary snippet.
