# News challenge

An app that shows the latest news using the Guardian API. It will grab all of the headlines from the Guardian newspaper API and display them on a page.
Clicking on a headline will link the user to the actual article page on the Guardian's website.

This challenge aimed to help us get familiar with fetch APIs. It was quite challenging, as it required a lot of trial and error in order to be able to set the project up and running safely, whilst keeping the API key secret. A great learning curve and I have learnt a lot.

### Technologies

A single page web app. Frontend JavaScript, CSS and HTML.


## User Stories

Some of these stories will need decomposing if they seem too large.

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

### Stretch user stories

```
As a busy politician
So I can quickly read through the essential of today's stories
I can see a summarised version of of the article 
```

To get a summary of an article's content, you'll need to use the [Aylien API
endpoint](https://docs.aylien.com/textapi/endpoints/#summarization), which means
integrating and calling another HTTP endpoint from a different API. This mean you'll need
to first fetch articles from the Guardian API, **then** use the Aylien API to summarise
the content — you'll need to use promises or callbacks to call both APIs and to handle the flow of
control.

```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```

## API

### API authentication

You'll need to [register and get an API
key](https://open-platform.theguardian.com/access/) to use the Guardian API. 


