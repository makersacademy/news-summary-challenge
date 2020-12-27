# News Summary challenge

This app grabs headlines relating to Dominic Cummings, prime minister Boris Johnson's former advisor, from the Guardian newspaper API and displays them on a page. Clicking on a headline will show the article.

### Headlines page:

![Headlines page](/images/headlines.png)

### Article page:

![Article page](/images/article-index-0.png)

### Technologies

This is a single page web app. I wrote the code in frontend JavaScript, CSS and HTML. As per the [challenge instructions](https://github.com/makersacademy/news-summary-challenge), I did not use any libraries or frameworks. Instead I used a test framework that I wrote earlier in the week for [this notes app](https://github.com/kabligh/notes-app).

I used [http-server](https://www.npmjs.com/package/http-server)) to serve the HTML, CSS and JavaScript files.

## To run the app

Start by cloning this repo:
```
$ git clone https://github.com/kabligh/news-summary-challenge.git
```
Install http-server to run locally:
```
$ npm install http-server --save
```
Start the server:
```
$ node node_modules/http-server/bin/http-server
```
Visit ```http://localhost:8080/``` in your browser

## User Stories

The app is based on the following user stories:

```
As a busy politician
I want to see news headlines in one place relating to Dominic Cummings
So I know what he is doing
```

```
As a busy politician
I can see a relevant picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

```
As a busy politician
I can click a news headline to read the whole news article
So that I can get an in depth understanding of a very important story
```
