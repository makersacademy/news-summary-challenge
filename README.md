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

## Technologies Used

* JavaScript

* HTML

* Jest for testing

* the jest-fetch-mock module to mock fetch requests

* npm package manager

* Node version manager

* esbuild

## My Approach

start by test-driving model class, constructed with empty array for storing headlines

test-drive view that creates article element for each headline with url (can click through to original article) and appends them to main container, each with an image

test-drive a NewsApi class that uses API request to fetch the latest headlines and display them on my page, as well as a search function

had trouble with dotenv for using environment variable to disguise API key so made a separate class to store it in the constructor and added that class to .gitignore

(Jonny Abrams)[https://github.com/jonnyabrams]