# News Summary challenge

This is a single page app that grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

### ChallengeNote
This challenge is still in progress, I had some issue to finish the rendering of a single article.
For this project, I decided to use one function NewsSummaryModel which stores and render the Title/image of each articles. The body of each articles is stored as well in the function, with a display value of none.
To render a single article, I decided to trigger the display value of the body with a button on each article, using getElementsByTagName with a callback function on each article. However I had some issue trying to access the 'node' array returned by the function. I would like to review this issue during this week. 


### Setup instruction
```
gitclone
```
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
