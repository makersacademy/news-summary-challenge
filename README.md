# News Summary challenge

Create an app that summarises the news; it will grab all the headlines from the Guardian newspaper API and display them on a page. Clicking on a headline will show a summary of the article.

## Technologies used

- Vanilla Javascript
- HTML
- CSS
- Guardian API


## Run the app

- clone the repo
```
$ git clone https://github.com/VladC24/news-summary-challenge.git
```
- visit The Guardian API and register for a new API
- go into the 'article-list-model.js' and replace the API with yours
- run and visit in your browser 'localhost:8080'
```
$ node node_modules/http-server/bin/http-server
```


## User Stories

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

## Thoughts

Although was unable to fully finish the app, it is still functional and directs the user to the article selected. 
By creating the app, I understood how to apply mocking/doubles in a newly created testing framework.
If I had more time, I would have dug deeper into adding the summary of each article.
