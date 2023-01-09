# News Summary Challenge

This repository contains a front end implementation of a webpage that displays the headlines of the most recent articles published on The Guardian, using the [Guardian API](https://open-platform.theguardian.com/documentation/).

When the page is loaded, it shows a default view of the newest guardian headlines and their thumbnails, as well as a link to the original article.
There is also a search bar at the top of the page, which allows the user to search for articles relating to the secified terms.
In order to return to the original views, the user can make an empty search.

The project satisfies the following user story:
```
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
```

# Running the Project

In order to view this web page, clone this repository and run
```bash
npm install
```

In order to call the API, you need an [API key](https://open-platform.theguardian.com/access/).
You then need to create a `apiKey.js` file using the following template and insert your API key
```javascript
module.exports = {
  GUARDIAN_API_KEY: 'Your api key here'
};
```
**IMPORTANT: DO NOT HOST THIS SITE PUBLICLY!! Your API key will be visible in the webpage's code. If you publish this site as is, your api key will be vulnerable.**

Then you can build the webpage by running
```bash
npm run build
```
and view it in the browser by running
```bash
open index.html
```

# Technical Details

This project uses Javascript to dynamically update the contents of the page without communicating with a server.

There are three main classes responsible for running this page:
- `ArticleClient`: responsible for all external communication, it uses Javascript's `fetch` function to send requests to the API.
- `ArticleModel`: stores the internal state of the page, in this case an array of all the articles to be displayed.
- `ArticleView`: responsible for passing the data received from the client to the model, displaying the model's data to the page, and handling user input (eg. search bar).

We use `esbuild` to bundle the Javascript together into a single file usable by the browser, using `index.js` as the entry point of the program.

We use `CSS` to style the page, and in particular to create the title header at the top of the page, the search bar, and the indivdual article boxes.

# Things to add

- Add the ability to get the summary of a given article (extra user story)
- Scale the page for different screens, in particular for mobile (extra user story)
- Display more than 10 articles (limit from the API but can be changed)
- Allow the user to favorite articles and get their list of favorites. This would likely involve the creation of a backend server in order to store this information.

# Skills used

- Test-drive a Javascript program running in a web browser.
- Use Javascript and the DOM to build a web page.
- Fetch data from APIs and updating the page with Javascript.
- Use CSS to style a page and improve the user experience.
