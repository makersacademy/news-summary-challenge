# News Summary challenge
An app that summaries the news. The app does not use any libraries or frameworks and is is written in vanilla JavaScript and CSS  

The app grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article. Clicking view summary will show a summary of the article. The app employs css flexbox in order to be mobile friendly. 

## Running the App
1. On line 21 of interface.js you should see the following code snippet. Replace `your-api-key` with your [Guardian API Key](https://open-platform.theguardian.com/documentation/).

```js
request.open('GET', 'http://content.guardianapis.com/search?show-fields=headline,trailText,thumbnail,body&api-key=your-api-key', true);
```

2. open `index.html`.


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


