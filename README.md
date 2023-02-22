![News Summary Challenge](/images/guardian_banner.png)

About this project:
-------

The Guardian news reader is an application that displays the latest stories from the Guardian website and allows users to search for stories by topic. It is built over one weekend using Node.js, the Guardian API, HTML and CSS.


Technologies used:
-----

**Languages and Frameworks:**

<img height="20" src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=JavaScript&logoColor=white" /><img height="20" src="https://img.shields.io/badge/-NodeJS-339933?logo=Node.js&logoColor=white" /><img height="20" src="https://img.shields.io/badge/-HTML-E34F26?logo=HTML5&logoColor=white" />  <img height="20" src="https://img.shields.io/badge/-CSS-1572B6?logo=CSS3&logoColor=white" /> <img height="20" src="https://img.shields.io/badge/-Jest-C21325?logo=Jest&logoColor=white" /> 

**Misc:**

- The Guardian API
- Postman
- Momenent.js
- Esbuild


Features:
-----
* Users can see all of today's headlines in one place
* Each headline is displayed alongside by a thumbnail
* Users can read the standfirst to see a short summary of each story
* Clicking on a headline takes the reader to the full article on the Guardian website
* A user can specify a search query on the page and get articles matching this search

Project Learnings:
-----

Through creating this application, I improved my ability to:

* Test-drive a simple Javascript program running in a web browser, using modern JS build tools.
* Use the DOM API to build a web user interface.
* Build a single-page web application fetching and updating remote data using JS.
* Interrogate and manipulate data from API requests.
* Unit test API requests using Jest mocks. 


## Installation Instructions

1. Clone this repo
2. Install dependencies with `npm install`
3. Create an `apiKey.js`file which exports your API Key
3. Use `npm build` to run the bundler in watch mode.
4. Open the index.html file in your browser
5. Run tests with Tests can be run with `npx jest`.


## Mockups

### Headlines page

![Headlines page mockup](./images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](./images/news-summary-project-article-page-mockup.png)

## API

### API authentication

You'll need to [register and get an API
key](https://open-platform.theguardian.com/access/) to use the Guardian API. 
