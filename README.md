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

##Summary of work completed
- I have completed the first 4 user Stories
- It seems the API for summarising texts has a very low limit. I managed to call from it and get summaries based on urls but by the time I got around to trying to implement it, the limit had been maxed so I decided to skip instead display the full text when you click an article.
- I had some issues with permissions on my mac which I couldn't figure out and as such I was unable to download surge. I wanted to do this so I could access it on my phone to see if I had indeed implemented the 5th user story correctly.

##Reflections
- I only did unit tests, mainly because I wasn't sure how to go about feature testing the application. I brainstormed for a bit to see how I could create functions like click, or visit, but didn't get very far.
- My methods are far too long. I really struggled with decoupling the fetch request from the code that would then manipulate the response. Whenever I tried, the response would go out of scope. I feel if I implemented callbacks properly I could have gotten around this but my brain was a bit fried.
- I would like to maybe do a tutorial on CSS at this point. I struggle to do anything other than a very basic page with colour and aligned text.
- I was happy that I was able to get responses from the APIs fairly easily but integrating the response in a way that sticks to the single responsibility principal is definitely something I need to improve upon.
