# News Summary Challenge

This repository contains a front end implementation of a webpage that displays the headlines of the most recent articles published on The Guardian, using the [Guardian API](https://open-platform.theguardian.com/documentation/).

In order to view this web page, clone this repository and run
```bash
npm install
```

In order to call the API, you need an [API key](https://open-platform.theguardian.com/access/).
You then need to create a `apiKey.js` file using the following template and insert your API key
```javascript
const apiKeys = {
  GUARDIAN_API_KEY: 'Your api key here'
};

module.exports = apiKeys;
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
