# News Summary challenge

* Challenge time: rest of the day and weekend, until Monday 9am.
* Feel free to use Google, your notes, books, etc. but work on your own.
* If you refer to the solution of another coach or student, please put a link to that in your README.
* If you have a partial solution, **still check in a partial solution** and send in a pull request.
* You must submit a pull request to this repo with your code by 9am Monday morning.

## Challenge

As usual please start by forking this repo.

You'll create an app that summarises the news.

## Project overview

Your app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

### Technologies

You'll write a single page web app.  You'll write your code in frontend JavaScript, CSS and HTML.  You won't use Ruby or backend JavaScript.

**And, as is the theme for this week, you won't use any libraries or frameworks!**

But, feel free to use the test framework you wrote during the week!

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

## Things Left To-Do
1. Skin it with CSS
2. Figure-out the kinks with getting and parsing the JSON.
3. Use above-mentioned JSON to build news objects.

## Running this repo
1. Clone it: ```git clone git@github.com:acodeguy/news-summary-challenge.git```
2. ```cd news-summary-challenge```
3. Install http-server via NPM: ```npm install http-server --save```
4. Run the server: ```node node_modules/http-server/bin/http-server```
5. Visit ```http://localhost```