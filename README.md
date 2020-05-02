# News Summary challenge

This is a project to practice Single page Web Apps, and AJAX requests, using vanilla HTML, CSS, and JS.

The app grabs all the headlines from the Guardian newspaper API and display them on a page. Clicking on a headline will show a summary of the article.

## User Stories

Must have:

> As a busy politician  
> So I know what the big stories of the day are  
> I can see all of today's headlines in one place

> As a busy politician  
> So I can explore an headline that interests me  
> I can click on a headline to see a summary

> As a busy politician  
> So I can get a few more details about an important story  
> I can see a summary of a news article

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

## API

### API Overview

The basic idea is to send an `apiRequestUrl` query parameter to the News Summary API. The value of this parameter is the URL of the request you _would_ have made to the Guardian or Aylien API, minus any API credentials.

### Guardian API

```bash
curl "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=SECRET_API_KEY"
```

### Aylien text summarisation API

If you wanted to use the Aylien API to summarise an article by Bret Victor, this is the cURL request you might make. Notice how it has headers to authenticate with the Aylien API.

```bash
curl "https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html" \
  -H "X-AYLIEN-TextAPI-Application-ID: APPLICATION_ID" \
  -H "X-AYLIEN-TextAPI-Application-Key: SECRET_APPLICATION_KEY"
```

To make this request via the Makers News Summary API with cURL, you could do something like this.

```bash
curl "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html"
```

Note how the `apiRequestUrl` parameter is just the request you would have made to the Aylien API. Notice how you don't have to send authentication headers.

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
It also assigns its stories with a call of `fetchStories`
- `fetchStories` is an async function that waits for CONFIG to be fetched , then fetches from the api url plus the resulting secret api-key. It returns a map over the responses results array which contains the story data, and creating new Story instances from them.
- `getJSON` is an async function that fetches a json from the specified path, waits for that to resolve, then parses and returns the json.
- `renderHeadlines` is another async function, that awaits the stories to be assigned with `fetchStories`, which grabs the element with id of articles and gets its first element child (the ul), then iterates over the stories appending the story.headlineComponent.

`interface.js` simply creates a new instance of StoryHandler, then adds an event listener for the COM content loaded, then calls the storyHandler.renderHeadlines