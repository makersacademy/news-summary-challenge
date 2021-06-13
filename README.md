# News Summary
An app that summarises the news

## LEarning Outcomes

The purpose of this exercise was for me to learn how to use API's. 

I managed to achieve the following,

* Fetched the top 10 latest news articles from the guardain.
* Fetched the data for each article.
* I display the healine, main catagory, sub catagory.
* I then use the apiUrl of each article to run through the Aulien API summarise the text before displaying it.
* There is a button to direct the user to the original article and a button to read the summary.
* There is a nother button to close the summary.
* It is a one-page app that is reasonably responsive. There are no media queries as yet.

Thngs I could not achieve.

* The body had a lot of elements, classes and ids.
* I tried to display only one image in each headline, but I could not. There would always be more than one image.
* I tried using nth-of-type and not(:nth-of-type()) on both the figure and img elements.
* Also tried to getElementById, ClassName, TagName and querySelector, but I could not call on the HTMLCollection or the NodeList.

## User Stories

As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are

As a busy politician
I can see a relevant picture to illustrate each news article when I browse headlines
So that I have something nice to look at

As a busy politician
I can click a news headline to see a summary and a photo of the news article
So that I can get an in depth understanding of a very important story

As a busy politician
I can see click a news article summary title which links to the original article
So I can get a few more details about an important story

As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks

As a busy politician
I can see whizzy animations in the app
To make my news reading more fun