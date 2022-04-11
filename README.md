# News Summary Challenge

My weekend challenge for week 7 of the Makers Academy boot camp was to build a simple web app that fetches all the headlines from the Guardian newspaper API and displays them on a page. For this, I fulfilled the following user stories:

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

---------------

## Technologies Used

* JavaScript

* HTML

* Jest for testing

* the jest-fetch-mock module to mock fetch requests

* npm package manager

* Node version manager

* esbuild

## My Approach

1. I started by test-driving a model class, constructed with an empty array for storing headlines and a function for adding them to this array

2. Next up was test-driving a view class that creates an article element for each headline along with its image and URL (satisfying the second and third user stories), and appends them to the main container of my HTML

3. Then I test-drove a NewsApi class that uses an API request to fetch the latest headlines from The Guardian and display them on my page, with nothing fancy going on presentationally (although I'd like to come back to this once I've learned some CSS)

4. To satisfy the user story about searching for articles, I included in my view class an event listener for clicking on the submit button accompanying an input field and a function in my API class that clears all articles and just loads the results of a search

## Future Improvements

As I mentioned above, the presentation is as basic as it gets but I'd like to revisit this once I've learned more and have more time to play around with HTML and CSS. 

One thing I had trouble with was using dotenv to store environment variables so I could disguise my Guardian API key. It looked not to be possible here, so I followed my fellow cohort member [Valentina Maggio](https://github.com/valentina-maggio)'s lead in creating a separate class with its own constructor to store the key, and adding this file to .gitignore.

[Jonny Abrams](https://github.com/jonnyabrams)