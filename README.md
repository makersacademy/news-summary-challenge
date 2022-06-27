# News challenge

## Project overview

This is an app that grabs all the headlines from the Guardian newspaper API and displays them on a page. This project uses code written in Javascript, HTML and CSS while using Node.js. The Test Driven Development (TDD) process was used when writing the code.

Initially, a Miro board was used in order to plan out this app's functionality. This board can be found [here](https://miro.com/app/board/uXjVO3dkjVs=/?share_link_id=472309087518).

> _Note: I wanted to also use the Aylien API in order to display summaries for each article but unfortunately Aylien is not allowing new users to sign up for an API key._

## Getting Started

If you haven't already got node installed, run the following commands to setup:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
source ~/.zshrc
nvm install node
nvm use node
```

Start by cloning this repository and run npm install:

```
git clone https://github.com/jmcnally17/news-summary-challenge.git
npm install
```

In order to access the Guardian API and therefore in order for this program to work, you must have your own API key that is sent with every request. If you haven't already got one, you can sign up for one [here](https://open-platform.theguardian.com/access/). Once you have obtained your API key, you must create a JS file with a function that returns the key so that it can be used by the ArticlesApi class:

```
touch src/guardianApiKey.js
```

while in the main directory. Then create the key function and export it:

```js
const key = () => {
  return "<Insert-your-API-key>";
};

module.exports = key;
```

Now run build and you should be good to go:

```
npm run build
```

## How To Use

While build is running, you can either double click the index.html file or enter `open index.html` in the terminal while in the main directory. This will open the app in your browser. Upon loading the page, the top ten current stories from the Guardian will be displayed on the page with a title that reads "Guardian Top Stories", as well as an input field and corresponding button the user can use to find articles that contain specific keywords when entered (the user can also press the enter key on their keyboard in order to click the search button).

Entering a search will then empty the list of articles on the page and will now display the top ten most relevant stories that contain any of the words the user entered in the search field. When the user enters a word that is not contained in any article headline, a corresponding message appears on the page notifying the user that their search has no matches. Similarly, when the API fails a request to retrieve the necessary data, an error message appears on the screen instead.

Each article comes with a thumbnail and a title. Clicking the thumbnail of an article makes the article body text appear on the right hand column of the page whereas clicking the title sends the user to the guardian website for that specific article.

### Mobile Version

In order to run this app in the browser on your smartphone, the live server package is needed first:

```
npm install -g live-server
```

This allows the user to run a local server for this app. Then, in the terminal while in the main directory, run:

```
live-server
```

to start the server. The port that your computer is using should be printed in the terminal (e.g. :8080). In order to open the app on your phone, your private IP address is needed. For Mac:

1. Open the Apple menu and select System Preferences.
2. Select Network.
3. Choose your network connection from the menu on the left.
4. Your IP address will be just under where it says "Status: Connected".

In your phone's browser, in the address bar, enter `http://<IP-address>:<Port>` and enjoy using the app!

> _Note: Your phone and computer must be connected to the same network for this to work._

## Testing

Jest was used as a test suite to test drive this app. To run these tests, in the terminal simply enter:

```
npm run test
```

To see the code coverage stats made by Jest, run:

```
npm run test:coverage
```

There may be an error that will fail a few of the tests. If this comes up just run:

```
npm install --save-dev jest-environment-jsdom
```

## User Stories

```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```

```
As a busy politician
So I can get a few more details about an important story
I can click a news article title which links to the original article
```

```
As a busy politician
So I can search what I want to read about
I can specify a search query on the page and get articles matching this search
```

### Stretch user stories

```
As a busy politician
So I can quickly read through the essential of today's stories
I can see a summarised version of of the article
```

To get a summary of an article's content, you'll need to use the [Aylien API
endpoint](https://docs.aylien.com/textapi/endpoints/#summarization), which means
integrating and calling another HTTP endpoint from a different API. This mean you'll need
to first fetch articles from the Guardian API, **then** use the Aylien API to summarise
the content.

```
As a busy politician
Just in case my laptop breaks
I can read the site comfortably on my phone
```

```
As a busy politician
So I make my news reading more fun
I can see whizzy animations in the app
```

## Guardian API Overview

If you wanted to get the latest articles from the Guardian API, this is the cURL request
you might make. Notice how it has a query parameter for `api-key`.

```
curl "https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=test"
```

Also notice that the URL parameter `q` is empty — we can pass in a search string to filter
the returned articles, for example to search articles containing "America" in the title:

```
curl "https://content.guardianapis.com/search?q=America&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=test"
```

The above request will return a response similar to this one:

```json
{
  "response": {
    "status": "ok",
    "userTier": "developer",
    "total": 2324223,
    "startIndex": 1,
    "pageSize": 10,
    "currentPage": 1,
    "pages": 232423,
    "orderBy": "newest",
    "results": [
      {
        "id": "sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding",
        "type": "article",
        "sectionId": "sport",
        "sectionName": "Sport",
        "webPublicationDate": "2022-02-02T14:42:43Z",
        "webTitle": "At last, the inventors of modern skiing have something to cheer: Dave Ryding | Andy Bull",
        "webUrl": "https://www.theguardian.com/sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding",
        "apiUrl": "https://content.guardianapis.com/sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding",
        "fields": {
          "headline": "At last, the inventors of modern skiing have something to cheer: Dave Ryding ",
          "byline": "Andy Bull",
          "thumbnail": "https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/sport",
        "pillarName": "Sport"
      },
      {
        "id": "business/live/2022/feb/02/oil-prices-climb-seven-year-highs-opec-meeting-markets-await-eurozone-inflation",
        "type": "liveblog",
        "sectionId": "business",
        "sectionName": "Business",
        "webPublicationDate": "2022-02-02T14:41:49Z",
        "webTitle": "Ofgem to unveil new household energy bill price cap on Thursday morning – business live",
        "webUrl": "https://www.theguardian.com/business/live/2022/feb/02/oil-prices-climb-seven-year-highs-opec-meeting-markets-await-eurozone-inflation",
        "apiUrl": "https://content.guardianapis.com/business/live/2022/feb/02/oil-prices-climb-seven-year-highs-opec-meeting-markets-await-eurozone-inflation",
        "fields": {
          "headline": "Ofgem to unveil new household energy bill price cap on Thursday morning – business live",
          "byline": "Julia Kollewe",
          "thumbnail": "https://media.guim.co.uk/aee3b3b05ea2a37acdadc91095c163fd381eba4a/0_24_3500_2100/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/news",
        "pillarName": "News"
      }
      // ...
    ]
  }
}
```
