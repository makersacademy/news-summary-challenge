# News Summary challenge

## Challenge

To create an app that summarises the news.
Your app will grab all the headlines from the Guardian newspaper API and display them on a page.  Clicking on a headline will show a summary of the article.

### Technologies

You'll write a single page web app.  You'll write your code in frontend JavaScript, CSS and HTML.  You won't use Ruby or backend JavaScript.

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
I can click a news headline to see a summary and a photo of the news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see click a news article summary title which links to the original article
So I can get a few more details about an important story
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

### MVC Diagram

# ![MVC Diagram](https://github.com/sabrinalord/news-summary-challenge/blob/master/images/News_MVC_Diagram.png)


### My Approach

* Index.js is the controller: 
  * It creates new instances of NewsApi, NewsModel and newsView classes. 
  * It calls api.retrieveNewsData from the NewsApi class

* NewsApi class:
  * retrieveNewsData accepts a callback function and fetches the data from the Makers news api. 
  * The call back function is defined in index.js as a function that takes in the newsData retrieved from the fetch and calls view.displayNews(newsData)

* News View Class:
  * Is constructed with the model and api instance that is instantiated in index.js.
  * Has a displayNews method that takes in the fetched newsData, and passes it into this.model.getNews() which turns it into an array of news. 
  * displayNews() iterates throuogh each item in the newsArray and creates a div element showing the title and thumbnail of the article. 

* News Model Class:
  * Has a getNews(newsData) method that takes in the fetched newsData object and grabs only the newsData.response.results array. It returns the array, which is then used in my newsView displayNews method. 

### Next Steps

I have not implemented CSS as I had some issues with the Makers News Api. I tried signing up to the Guardian and getting my own API key and storing this in an .env file in gitignore.  After trying this I had issues with bundling dotenv with esbuild. 
