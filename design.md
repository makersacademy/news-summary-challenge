# User stories

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

- Stretch user stories

As a busy politician
So I can quickly read through the essential of today's stories
I can see a summarised version of of the article 

As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone

As a busy politician
So I make my news reading more fun
I can see whizzy animations in the app

# Design

As a busy politician
So I know what the big stories of the day are -> returned from Guardian API
I can see all of today's headlines in one place -> API returns JSON object with multiple keys

fetch function that returns Guardian API - called on loading of page
display headlines function - create div element for each headline - called on loading of page

viewing picture of article with headlines
pass headline and thumbnail to array so they can be called when adding element to page

