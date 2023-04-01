User story:

As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place

As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines

As a busy politician
So I can get a few more details about an important story
I can click a news article title which links to the original article

As a busy politician
So I can search what I want to read about
I can specify a search query on the page and get articles matching this search
Stretch user stories

As a busy politician
So I can quickly read through the essential of today's stories
I can see a summarised version of of the article 
To get a summary of an article's content, you'll need to use the Aylien API endpoint, which means integrating and calling another HTTP endpoint from a different API. This mean you'll need to first fetch articles from the Guardian API, then use the Aylien API to summarise the content — you'll need to use promises or callbacks to call both APIs and to handle the flow of control.

As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
As a busy politician
So I make my news reading more fun