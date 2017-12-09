# News Summary Reader

This app uses the Guardian API to get news articles for the day and the Aylien API to summarise those articles and display them on the page. Only HTML, CSS and pure JavaScript is used, no frameworks.

You can only run the app locally once you have replaced the GUARDIAN_ENDPOINT and AYLIEN_ENDPOINT placeholders in the src/article-controller.js file with their respective working urls.

Clone the repo:
```
$ git clone https://github.com/cazwazacz/news-summary-challenge.git
```

Install dependencies after changing into the directory:

```
$ npm install
```

For tests, run:
```
$ open TestRunner.html
```

To start the app:
```
$ node node_modules/http-server/bin/http-server
```

To-do
---
- More tests
- Work on CSS and styling, make it responsive
- Add animations
- Refactor code, patricularly in src/node-controller.js
