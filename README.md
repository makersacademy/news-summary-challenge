The Shallot Summary
================

This frontend, single-page app retrieves information from the Guardian API to display news headlines, and uses the Aylien summarisation API to display a few sentences of each article when selected. It is written in pure JS, including my own testing framework that I built to test the app. The one exception to pure JS is the node `http-server` module, which is used to serve the app. Event listeners for button presses and hashchanges are kept in a separate file, and interact with the API controller. The app has been tested for mobile viewing in Chrome.

## How to use
Here is a link to the app in production: https://news-summary-challenge-123.herokuapp.com/

`server.js` serves the app. `app.js` instantiates a `HeadlinesController` and loads the headlines using an API request sent from the `APIController`. Event listeners are also loaded into `app.js`, and interact with the `APIController` to reload headlines or load a summary. The view models are fully tested to render the correct HTML for each page. The `ArticleList` model stores a list of `Article` models. The `Article` models are simple data containers for headline, summary, image, web URL, and ID information.

## Screenshots
Here is the main headlines view as you load the app:
![image](./images/headlines.png)

And here is an example summary page:
![image](./images/summary.png)

Clicking on the app title takes you back to the headlines view:
![image](./images/return-home.png)

## To install this app
- Clone the repository.
- `npm install` inside the project folder to install dependencies.
- `npm start` will use `server.js` to serve the app at `http://localhost:3000`.
- `npm test` can be used *after* `npm start` to run the tests. Or visit `http://localhost:3000/test-runner.html` in your browser.
- The testing framework can be found in `/lib/test-framework.js`. Custom matchers can be added to the `matchers` function.
