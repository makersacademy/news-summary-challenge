# README

## Project Overview:

Your app will grab all the headlines from the Guardian newspaper API and display them on a page. Clicking on a headline will show a summary of the article.
## User Stories:

*As a busy politician  
I can see all of today's headlines in one place  
So I know what the big stories of the day are*

*As a busy politician  
I can click a link to see the original news article  
So that I can get an in depth understanding of a very important story*  

*As a busy politician  
I can see a summary of a news article  
So I can get a few more details about an important story*  

*As a busy politician  
I can see a picture to illustrate each news article when I browse headlines  
So that I have something nice to look at*  

*As a busy politician  
I can read the site comfortably on my phone  
Just in case my laptop breaks*  

*As a busy politician  
I can see whizzy animations in the app  
To make my news reading more fun*  

## Initial Planning:
- I looked at the user stories and decided that my minimum viable product would be based around the first three user stories. I chose these because they are the most relevant to my goal of learning about a single page web app and api interactions. The final three seem to be more focused on aesthetics.
- I then altered the mockup drawings of the product to reflect this

// IMAGE OF PLANNING DIAGRAM

- I then broke down these 3 user stories into more specific requirements/ stages, in the process making a list of gaps in my knowledge or potential problems, and thinking about how this app relates to the notes app I did during the week
  - **1) I can see all of today's headlines**
    - I need to be able to get the headlines from the Guardian's API
    - I need to be able to process the JSON I receive into something my app can use - initial thoughts: make a newsStory object which has the following properties:
      - headline (webTitle)
      - unique id (id)
      - link to guardian (webURL)
    - I need to be able to display the headlines
      - probably via iterating through an array of newsStory objects and wrapping various properties in HTML
      - when displaying the headlines I need the headline itself, a link to the original news story and a button or link to get a summary of that news story
  - ** 2) I can click a link to see the original news article **
    - I don't think this will require an event listener because if the href is a real url I think clicking it will automatically take you to the page
  - ** 3) I can see a summary of a news article **
    - I need to be able to click on a summary button/link for a particular headline, this must have a unique ID associated with a particular newsStory object
    - I need an event listener for a change in the hash which intercepts the call and runs a function which:
      - sends a message over to the summary API
      - processes and stores the result of the query
      - displays it

## Things I need to research
- refresh knowledge of API including how we talk to them- how is it different in vanilla JS (look into Fetch API as something with clear syntax than XMLHttpRequest objects)
- find out how the specific API's work
- how to write tests for interactions with an API, also how to stub the interactions so as not to exceed number of requests permitted per day


## Set Up:
- initialised git in the root of the project
- created basic structure (a src folder, a tests folder, an index.html file, a README.md)
- imported in basic testing library from previous notes app
- set up http server: `$ node node_modules/http-server/bin/http-server` to run app

## Actual Minimum Project:
- I have completed the first two user stories and planned how to do the third
