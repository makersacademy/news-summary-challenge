# News Summary challenge

This is a project to practice Single page Web Apps, and AJAX requests, using vanilla HTML, CSS, and JS.

The app grabs all the headlines from the Guardian newspaper API and display them on a page. Clicking on a headline will show a summary of the article.

## Visit the site

The site is available for viewing [here](http://guardian-summariser.surge.sh/).

## Screen Previews

![Screen Previews](images/guardian-summariser-preview.gif)

## User Stories

Must have:

> As a busy politician  
> So I know what the big stories of the day are  
> I can see all of today's headlines in one place

> As a busy politician  
> So I can get a few more details about an important story  
> I can click on a headline to see a summary of a news article

> As a busy politician  
> So that I can get an in depth understanding of a very important story  
> I can click a link to see the original news article

Should have:

> As a busy politician  
> So that I have something nice to look at  
> I can see a picture to illustrate each news article when I browse headlines

> As a busy politician  
> Just in case my laptop breaks  
> I can read the site comfortably on my phone

Could have:

> As a busy politician  
> To make my news reading more fun  
> I can see whizzy animations in the app

## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## Development Journal

### Modelling

Given that this is a serverless website, there isn't much to consider with a traditional MVC model.

However, I would like to use a component based organisation structure, as it seems there is a clear component: the Story.

Here's a CRC card for the Story:

| Responsibilities                                     | Collaborators |
| ---------------------------------------------------- | ------------- |
| Knows headline                                       |               |
| Knows summary                                        |               |
| Knows image                                          |               |
| Knows how to present itself as a headline with image |               |
| Knows how to present itself as a summarised article  |               |

With this implementation it would be simple for the interface to make the AJAX request to the Guardian, then map the resulting JSON into Story instances that could then provide HTML to be displayed.

### User Story 1

> As a busy politician  
> So I know what the big stories of the day are  
> I can see all of today's headlines in one place

For this I expect a page to be able to show a series of headlines.

I will test driving a Story class using a test framework of my own design (as this is a no library project).

Wrote a test for the Story class to be initialised with a headline and be able to return that headline. Red.

- Created a class with constructor accepting a headline.

Green.

Wrote a test that the Story.headlineComponent should return a headline component (an li with an h2 in it). Red.

- Wrote headlineComponent method to create and return the relevant html with headline inserted.

Green.

Refactored the testing framework to use a new custom matcher "returnHTML" using the outerHTML method.

Next to create an html page with an interface.

I created an `index.html`, sourcing `storyHandler.js`, `interface.js` and `story.js`

`index.html` has a basic title, and a section containing an empty ul with id of articles-list.

`storyHandler.js` has class StoryHandler with several methods:

- Its `constructor` takes an argument of apiURL, defaulting to the guardian's ape url, so that other routes can be injected for testing purposes.  
  It also calculates a correctly formatted date string, and sets other constants for interpolation into the query string.  
  It assigns CONFIG with a `getJSON` call for the config.json file (containing the hidden api-key).  
  It also assigns its stories with a call of `fetchStories`.  
- `fetchStories` is an async function that waits for CONFIG to be fetched , then fetches from the api url plus the resulting secret api-key. It returns a map over the responses results array which contains the story data, and creating new Story instances from them.
- `getJSON` is an async function that fetches a json from the specified path, waits for that to resolve, then parses and returns the json.
- `renderHeadlines` is another async function, that awaits the stories to be assigned with `fetchStories`, which grabs the element with id of articles and gets its first element child (the ul), then iterates over the stories appending the story.headlineComponent.

`interface.js` simply creates a new instance of StoryHandler, then adds an event listener for the COM content loaded, then calls the storyHandler.renderHeadlines.

I used the [Guardian's helpful API explorer](https://open-platform.theguardian.com/explore/) to work out how I wanted to use their API. I decided on 20 articles from today, ordered newest first.

_I would've liked to TDD the StoryHandler, but as it relies on asynchronous functions my testing framework wasn't appropriate for it, so I spiked it._

### User Story 2

> As a busy politician  
> So I can get a few more details about an important story  
> I can click on a headline to see a summary of a news article

For this user story, the headlines need to be able to be clicked.

For this I could either add ids of the story's id to each li, and add event listeners to check do something when they have been clicked, or use an anchor linking to a hash link of the story's id, and listen for hashchange.

In either case, the story needs to have its own unique id.

Fortunately the JSON returned from the guardian includes a unique id for each story, so we can use that.

Updated the tests for the Story to be constructed with an id alongside the headline. Red.

- Added a new parameter to Story constructor for id.
- Adjusted the other test to pass an id to its story also.

Green.

Also updated the StoryHandler `fetchStories` method to pass the stories it creates an id too.

I decided to go down the route of ids on each li, rather than links. I updated the test for `headlineComponent` to expect that the li returned has an id with the value of the id passed to the story. Red.

- Updated the `headlineComponent` method to set an id attribute on the li element before adding to DOM.

Green.

Now the Story needs to be able to represent itself as an article summary.

- Wrote an async function `summaryComponent`, that creates a section element, appending to it h2 with the story's title, and p element for each of the story's `summarySentences`.

- The `summarySentences` are generated from another async function, `summary`. This function checks if `summarySentences` is not yet defined, and if so uses the story's `ARTICLE_SUMMARISER` to `fetchById` with the story's id. This returns an array of strings which summarise the article.  
  As the strings come through from what I assume is a machine learning algorithm they can have some issues with newlines, and unnecessary date stamps coming through. The sentences are mapped through, using regex replace to remove the newline characters and date stamps, and the resulting array assigned to the story's `summarySentences`.  
  If `summarySentences` is already defined it simply returns that. This helps prevent unnecessary API calls.

- The story's `ARTICLE_SUMMARISER` is an injected `ArticleSummariser` class. The `ArticleSummariser` has a function `fetchById` which fetches from the helpfully provided news-summary-api heroku server with an implementation of Alyien.

_I did try to implement this myself, however due to Cross Origin Request Blocking by the browser, the call to the Alyien API needs to be done with a server, hence the news-summary-api heroku server._

- `fetchById` interpolates the passed id onto the base url for the api, then parses the resulting JSON, unpacks the sentences and returns them as an array (which `story.summary` can use).

Now the interface needs to be able to track when and which of the headlines is clicked, and the storyHandler needs to be able to get the correct story to provide its `summaryComponent` and render that to the page.

- In `interface.js` after the StoryHandler has rendered the headlines, the `addClickListeners` method is called in a chained then.

- `addClickListeners` gets all the elements with class name 'headline', and loops through them adding click event listeners that make a call to `storyHandler.renderSummary` passing in the event current target's id (i.e. the story id).

- `storyHandler.renderSummary` is an async function that takes an argument of id, and finds the correct story using the `findById` async function. It then awaits the found story's `summaryComponent` (as this may involve an API call), and grabs the main section of the page. it then replaces the main section with the `summaryComponent`.

- `findById` simply loops through the `stories` array and filters them for one that matches the id passed.

It now works, but sometimes it takes a short while to fetch the summary in order to display it, but I think this a fair trade off as summaries are fetched when required to limit API calls. It would be possible to pre-load all of the story summaries, but that would result in many many more API calls, which may lead to rate limiting.

To reassure the user that the story is in fact loading, I added to the `renderSummary` method to change the section's innerHTML to an h2 tag of "Loading..." before the section is replaced with the story's `summaryComponent`.

### User Story 3

> As a busy politician  
> So that I can get an in depth understanding of a very important story  
> I can click a link to see the original news article

So, once the user has clicked through to the summary, there could be a link tot he full article. Fortunately this is quite simple to implement as we already have the route to the article represented as the story's id, and we know they are all going to need the Guardian's base URL.

- Added a method `createLink` to Story which takes text and and url as parameters, it creates an a element, settings its href attribute with the passed url. It then creates a new text node with the text passed, and appends that to the a element, and returns it.

- Added to the `summaryComponent` method a variable articleLink, which uses the `createLink` method, passing in the text 'Read original article' and `this.LINK_URL` which is assigned with the base url for the guardian and the story id concatenated together. The articleLink is appended onto the component before it is returned.

### User Story 4

> As a busy politician  
> So that I have something nice to look at  
> I can see a picture to illustrate each news article when I browse headlines

This I have found a bit tricky. Viewing the Guardian's articles you can clearly see good images to grab the url of, however the Alyien Article Extraction API, which offers a way to extract an image url among other data from articles, doesn't seem to be able to decide which to return, so it returns none.

I have made some attempt with other APIs, however their rate limiting is crippling. You can see a start at an image scraper in `imageScraper.js`. The idea is that it would use the api to return the HTML of the page, then use regex to match the first appropriate image from the page.

Given that we aren't allowed to use server side backend JS I cannot write my own web scraper, and existing APIs are either prohibitive in their rate limiting, cost money, or require the use of an SDK, it seems this is a lost cause.

### User Stories 5 & 6

> As a busy politician  
> Just in case my laptop breaks  
> I can read the site comfortably on my phone

> As a busy politician  
> To make my news reading more fun  
> I can see whizzy animations in the app

Strictly speaking, unstyled HTML is fully responsive, but I see what this user story is driving at.

This is all CSS based subjective style improvements. There's a lot of tinkering and trying different styles involved, so rather than go through everything I tried here is a summary of what I ended up with:

- Added a header element, containing the h1 and the nav.
- Nav element has a single button to restore the headlines list.
- Arranged the header and the section using flexbox.
- Added a color scheme and font (I swear I didn't make it look like the guardian deliberately, it was completely coincidental)
- Gave buttons and headlines hover effects with animations for emphasis.
- Styled the scrollbar too.
- Font size scales with viewport width between a min and max value.

### Back to User Story 4

> As a busy politician  
> So that I have something nice to look at  
> I can see a picture to illustrate each news article when I browse headlines

It turns out there is a parameter that can ce included to provide a link to the thumbnail image of the article.

Added to the test that the Headline component has an image. Red.

- Added thumbnail image as a parameter to Story.
- 

## Retrospective

- I don't like not using TDD. I spiked a lot of features for the front end, setting my own expectations for the behaviour I wanted to create. After creating a couple of features in particular (the story's `summaryComponent`) I realised this could have been TDDd.
- I could've organised the CSS a bit better, but for this small project and given the little I had to write it, it will serve.
- I Feel I have got to grips with asynchronous functions, especially async await.
- I'm a bit miffed that I couldn't find a solution to get the image, but never mind.
- Why is getting a JSON into a js file so difficult??
