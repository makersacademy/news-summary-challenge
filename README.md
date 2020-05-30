# News Summary challenge

## Overview

 - This project takes headlines and articles from the Guardian API and puts them onto my own website.

 - On page load, it displays the 10 most recent guardian articles, with the headline, topic and a picture if there is one present in the article. Open index.html to view webpage.

 - If you click on a headline, it will load up that article without a page refresh.

 - This project also features my own TDD framework. Load run_tests.html to see the results, printed in the console.

 - CSS and animations have been added to make the website more interesting.


## Approach

#### src/news.js

This has 4 functions, all tested.

 - makeHeadlineDiv() - takes Guardian API response as argument and returns a div containing 10 headlines with relevant topic and an blank img tag (populated later). Each headline links to the full article.

 - buildArticle() - takes Guardian API response as argument and returns div containing article headline, topic, date and a button to return to the main headlines.

 - removesS() - takes out the s from https:// in urls (Guardian API won't accept it otherwise).

 - toTitleCase() - makes first letter of each word capital.

#### src/news.js

This page deals with XMLHttpRequests to the Guardian API. It contains 6 functions. These have not been tested as they deal with updating the HTML.

- loadArticle() - returns data for a particular article from the Guardian API.

- loadHeadlines() - returns data of the 10 most recent articles from the Guardian API.

- getImage() - gets first image from the article if one exists, and puts it on the headlines page.

- animate() - uses JS to animate the page title on page load.

- clear() - simply clears HTML no longer needed.

- load() - loads necessary HTML.

#### TDD

- spec/framework.js  - this contains the functionality for the testing. It contains 3 matchers - toBe, toIncludeHTMLContent and toBeHTMLNode. It is written so tests closely resemble Jasemine.

- spec/news_spec.js - this contains the tests. There are 2 doubles to represent the Guardian API response data. These are sent to the relevant functions to test they return the correct HTML content. There are also simple tests for the other functions.