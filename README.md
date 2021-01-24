# News Summary challenge

Check out [here](http://makers-news-today.surge.sh)

I have built a single-page web app that summarises the news using the Guardian API and Aylien APIs, using Javascript, HTML and CSS. 

## Key Features
* Show 10 latest headlines from Guardian 
* Click on the title to see a summary using modal
* Click on the summary title to go to the guardian article
* Responsive to mobile screen size

## Main challenge
* Fetching the Guardian API was straightforward but creating the multiple modals to dynamically show summary page was the biggest challenge I faced.
* Since the Aylien API has a low API request limit (as it is directed via Makers API), in case of API fetch failure, I have replaced the summary text with the full article body.

![main](https://github.com/Aracho1/news-summary-challenge/blob/master/images/main.png)
![modal](https://github.com/Aracho1/news-summary-challenge/blob/master/images/modal.png)

## Completed User Stories


```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can see a relevant picture to illustrate each news article when I browse headlines
So that I have something nice to look at
```

```
As a busy politician
I can click a news headline to see a summary and a photo of the news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see click a news article summary title which links to the original article
So I can get a few more details about an important story
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
