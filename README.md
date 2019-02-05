
## Project overview

Your app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

I however wanted to compare two newspapers against eachother, i therfore used both the Guardian Api and New uk api - to get the Daily Mail, in order to compare headlines. Whilst the News uk api is standardised for hundreds of newssites and is much cleaner to use, I wished to challenge myself to create flexible code that would be able to handle both the api's with as little repetition as possible. I therefore kept to the crunky Guardian Api and the News uk. 

### Technologies
Javascript 
CSS
Html

### Serving your app

To view the app, simply: 
1. clone this repo
2. open the index.html file in a browser (please use chrome as some css features may not be available on others)

## User Stories



```
I can see all of today's headlines in one place
I can see a picture to illustrate each news article when I browse headlines
So I know what the big stories of the day are
```
This is done for both Guardian and Daily Mail.

```
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```
This is done for the Gaurdian and can be easily implemented for dialy mail.

```
I can see a summary of a news article
So I can get a few more details about an important story
```
I did not get round to this... I would solve this by:
 - generate a show more button with each news story
 - ensure each button has the id/name of the article
 - attach event listners or onclick to the show more buttons - the handler should either put guardian or     dailymail listener
 - the onclick/eventlistner should submit a fetch request to the api with the id of the resource
 - the fetch request should be passed a single_post_handler and a container


```
As a busy politician
I can read the site comfortably on my phone
I can see whizzy animations in the app
```
I did not bother with css responsiveness in this challenge
