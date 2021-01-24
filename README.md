## Project overview

Your app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

## User Stories

Some of these stories will need decomposing if they seem too large.

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
I can click a news headline to see the full text and a photo of the news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can click on the title in view article view and it will take me to the original url
So I can get a few more details about an important story
```

## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

### Testing Framework

There is a custom testing framework for this project. In order to run tests, you will need to pull the [testing framework repo](https://github.com/calavell/news_summary_testing_framework/blob/main/README.md) to your local machine. There are instructions on the repo for how to download it and integrate it with this project.

##Reflections
- I have completed the first 4 user Stories
- It seems the API for summarising texts has a very low limit. I managed to call from it and get summaries based on urls but by the time I got around to trying to implement it, the limit had been maxed so I decided to skip instead display the full text when you click an article.
