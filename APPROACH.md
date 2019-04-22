# Listing approach and inner monolog

I'm creating simple app in vanilla js - no frameworks to help..maybe just bootstrap, because I still don't want to spend time learning css at the moment.

The app will have a list of headlines with a corresponding picture on the first page, and a summarised article on the detail page.

This involves 2 api calls, one to the guardian API and one to the summariser API

I will be using ES6 class keyword in this.

# Before I start

## What am I developing

The app will have the following pages

- Home: which will contain a list of headlines - using bootstrap card system to display them (centered in the page)
- Headline for specific id: contains the summarised text of the article

Each page in my app will have the following structure:

- Navbar
- Content section

Each route in my app will have the following structure

- Resource
- Identifier

`localhost:8080/#/articles/id`

- resource = article
- identifier = id

I am making hash based router.
In the router, the resource is pre-defined, but the identifier is dynamic

I am using mockapi.io for initial testing of the API, before hitting the Guardian API for initial tests

The app will focus on:

- routing
- architecture - using modules

## Routing

- reliant on th # - fragment identifier [WIKI link](https://en.wikipedia.org/wiki/Fragment_identifier)
- when browser hits this char, they skip everything after it, which means that sending the user to a different page is our responsability, not the browser's

`localhost:8080/#/something` or `localhost:8080/#/somewhere` are the same for the browser and it dosen't send a server request to fetch a route

### Steps:

In the routing-module.mjs

1. Hard code the routes

```js
const routes = {
  '/': 'Home',
  '/articles/:id': 'ArticleShow'
};
```

2. Router code takes a URL and checks against the list of supported routes

```js
const router = function() {
  //Lazy loading of view element
  const content = null || document.getElementById('page_container');

  //Get the request object : {resource, id} elements
  let request = Utils.parseRequestURL();

  //Parse url - if it has id route to resource/id
  let parsedURL =
    (request.resource ? '/' + request.resource : '/') +
    (request.id ? '/:id' : '');

  //Get the page from the routes
  //If parsed page is not in the routes - select 404 page

  let page = routes[parsedURL] ? routes[parsedURL] : Error404;

  content.innerHTML = page.render(); //where is render()

  return parsedURL;
};
```

In the app.js

3. App listens on change of urls - and routes accordingly

```js
window.addEventListener('hashchange', router);
```

4. App listens for page load and loads the router once page load completed

```js
window.addEventListener('load', router);
```

In the helper-method.js

5. Created a Utils module

- parseRequestURL

```js
const Utils = {
  parseRequestURL: function() {
    let url = location.hash.slice(1).toLowerCase() || '/';
    let r = url.split('/');

    //create request object to return from this function
    let request = {
      resource: null,
      id: null
    };

    //assign url elements after #
    request.resource = r[0];
    request.id = r[1];

    return request;
  }
};
```

**What's happening above:**

Page load:

1. When app loads, and event is fired and router is called
2. Router takes url and breaks it down into the route schema of resource and identifier
3. Url is concatenated with each schema element resource/id
4. Url string is compared against existing map of routes that we support
5. If there is a match we render the page which comes `routes[parsedURL]`, by calling render(). We insert the html int the content element, which we obtained by `document.getElementById('page_container')`

Dynamic route:
`localhost:8080/#/articles/1`

1. When page loads, the `hashchange` even is triggered and router is called again
2. Router takes the url and breaks it down into resource and id
3. Url is reconstructed with schema elements, however, if there is an id, that part of the schema is replaced with `:id` so that we can map it to our route. This helps me define a simple route to show the data dynamically
4. Url string is compared to existing routes
5. If there is a match, page is rendered

> We re-render the page content of the app every time the user changes the url and loads the page (enter,refresh) of if he uses in app navigation links

> Navigation state is saved in the browser history - back/forward works

> For # routing to work, all in app links must have the # in the href

## Creating the pages:

To render the pages i created a separate module with separate objects for the pages I am rendering.  
I'm using ES6 template literals to define my html template.
I'm using a function so that the rendering only happens when the page is called.  
Functional approach useful for working with different components on a page - data can be passed to it for rendering using the function params

```js
//pages.mjs module
let Home = {
  render: function() {
    let view = `<section class = 'section'>
    <h1> About </h1>
    </section>
    `;
    return view;
  }
};
```

I've also added a button for testing purposes

- the event listener can be added in the router, or through a method of the page
- i'm adding an `after_render` method which will be called in router after rendering the page. It will add an event listener. Code looks like this now

```js
//pages.mjs module
let Home = {
  render: function() {
    let view = `<section class = 'section'>
    <h1> Home page </h1>
    <button id="myBtn">Button</button>
    </section>
    `;
    return view;
  },
  after_render: function() {
    document.getElementById('myBtn').addEventListener('click', () => {
      alert('Button pressed');
    });
  }
};
```

## Build testing framework

I have used the following approach:

[Hackernoon article](https://hackernoon.com/learn-assert-by-building-a-javascript-testing-library-370b34634182)

### Steps

1. Creates testing-framework.js file

> Discussion: a testing framework is a collection of functions which take callback functions as their parameters and usually a text to identify the test

2. Build describe, it and expect functions

- **describe** takes 2 parameters (string and function)
- **it** takes 2 parameters (string and function)
- **expect** takes 1 parameter and return several functions, which are our usual **matchers** (toEqual, toBe, toBeTruthy..etc). I only have a toEqual matcher. Will add more if necessary.

3. The article suggests to use the built in library assert, however i have built my own assert object which I'm using in this test framework

4. Implement an error handling in the **it function**. This will represent the output of my tests. If there is no error i get a success message, If there is an error, it is caught and i can use it in my Fail message.

5. The assert object's toEqual method will throw an error if the comparison between the actual and expected values returns false. This is needed in the it function

6. Testing framework exports describe, it and expect. These are imported in the testing file via the require method (testing through node needs require)

7. [After ARTICLE class] Testing framework expanded to account for testing if an object is and instanceof a class and if it has an expected method

8. [After ARTICLE LIST class] Testing framework extended to cover length of an object

[How to check if an object has a method](https://stackoverflow.com/questions/47301877/check-if-method-exists-in-a-class-in-typescript?rq=1)

**EXTRA: Implement colors in your terminal**

[Link to colorful text in terminal page](https://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script)

```js
You can print colorful text to command when run nodejs application.

console.log('\x1b[36m%s\x1b[0m', info);  //cyan
console.log('\x1b[33m%s\x1b[0m: ', path);  //yellow
Here is reference of colors and other characters:

Reset = "\x1b[0m"
Bright = "\x1b[1m"
Dim = "\x1b[2m"
Underscore = "\x1b[4m"
Blink = "\x1b[5m"
Reverse = "\x1b[7m"
Hidden = "\x1b[8m"

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

BgBlack = "\x1b[40m"
BgRed = "\x1b[41m"
BgGreen = "\x1b[42m"
BgYellow = "\x1b[43m"
BgBlue = "\x1b[44m"
BgMagenta = "\x1b[45m"
BgCyan = "\x1b[46m"
BgWhite = "\x1b[47m"
```

## Create Articles and Article models

- These are needed in order to map data received from the api and display it on page
- Article model will have _text, image and id properties_ as well as a _getText_ and _getImage_ and _getId_ methods to retrieve the text and image.
- Articles will have a _list_ property to hold articles and _, \_getArticle(id)_ to retrieve 1 article and _getArticles_ to retrieve all articles.

## Fetching data from api

- add functionality to get articles from an API
- create an api module
  - sends request to get articles
  - sends request to summarise articles
    - summaries are saved in in the Article
  - articles are stored in the ArticleList list array

## Rendering:

- Home page will render all the articles
  - require the list of article objects
  - use the list getData to get a list of article objects
  - use the article getData function to get access to the article attributes
  - use the attributes to render the article on the page
- ShowPage will render 1 article
  - event listener on the article card
  - when triggered ShowPage is displayed
  - it will need the id of the article to retrieve it and render it
  - the article getData will be used here

## Using guardianAPI for retrieving news

- Make a get request to the backend route
- Backend route breaks the request and recomposes it for sending a Get request to the guardianAPI
- Frontend waits for a response from the request to retrieve the json and populate the article list with articles

TODO:

- install NPM package for aylien
- key saved in ENV variable for local use and heroku confiv var use

- When user clicks on the articles
  - send link for article to Aylien api

EndPoint: https://api.aylien.com/api/v1

//Example
curl https://api.aylien.com/api/v1/summarize \
 -H "X-AYLIEN-TextAPI-Application-Key: KEY" \
 -H "X-AYLIEN-TextAPI-Application-ID: ID" \
 -d sentences_number=3 \
 -d url="https://www.newsbtc.com/2019/04/20/bitcoin-displacing-gold-entirely-value-btc-350000"

RESULT:

"text":

- "Since its birth, Bitcoin (BTC) has been lauded as an alternative to traditional assets day in and day out. Most notably, the cryptocurrency is. in the eyes of some pundits, a replacement to gold, specifically the metal’s store of value capabilities. But if Bitcoin takes over gold’s hegemony, what would happen to the value of BTC?\nThe Case For A Six-Figure Bitcoin\nAccording to HodlWhale, a Seattle-based cryptocurrency investor, a world where Bitcoin has absorbed all the value of the gold in circulation would see BTC valued at $350,000.\nThis figure isn’t exactly baseless. As reported by NewsBTC on an earlier date, all gold in circulation is currently valued at approximately $7.83 trillion, while all BTC has a mere $94 billion valuation. If the latter was to fully displace the value of the first, Crypto Voices, an industry analytics and research group, estimated that BTC would swell to a value of $450,000 — slightly above HodlWhale’s estimate.\nAnd while this sounds absurd, especially considering that cryptocurrencies remain in the depths of a brutal bear market, some are sure that Bitcoin will become the “digital gold” that its investors want it to be.\nCould BTC Displace Gold? \nMere days ago, Adamant Capital, a Bitcoin-centric fund led by long-time investor Tuur Demeester, released a report on the crypto market’s current status. Following an explanation that “whales” are accumulating cryptocurrencies en-masse, the market is expressing “hope,” and that a further drawdown could be possible if conditions are right, Adamant’s partners explained that they expect for Bitcoin to disrupt traditional assets, like stores of value and reserve assets.\nThe firm specifically looks to the growth of Bitcoin scaling, like the Lightning Network’s staggering growth and the rise of sidechains; the of this industry through Bakkt, Nasdaq’s futures, etc., and the rise of the millennial demographic to claim that BTC could become a “globally used digital gold and reserve asset.” But why exactly should BTC usurp gold?\nWell, it’s simple, to be frank.\nAs Gemini’s Tyler Winklevoss explained, Bitcoin is “better at being gold than gold itself” — a sentiment held by many long-standing cryptocurrency investors. He specifically looks to the fact that BTC is portable, sculpted for today’s digital society, even scarcer than the metal, censorship-resistant unlike traditional assets, and decentralized as a way to back this cheery sentiment. At one point, the cryptocurrency entrepreneur added that the only thing that gold has over BTC is a “3,000-year headstart.”\nFeatured Image from Shutterstock",

  "sentences":
  [
  "But if Bitcoin takes over gold’s hegemony, what would happen to the value of BTC?",

  "The Case For A Six-Figure Bitcoin\nAccording to HodlWhale, a Seattle-based cryptocurrency investor, a world where Bitcoin has absorbed all the value of the gold in circulation would see BTC valued at \$350,000.",

  "The firm specifically looks to the growth of Bitcoin scaling, like the Lightning Network’s staggering growth and the rise of sidechains; the of this industry through Bakkt, Nasdaq’s futures, etc., and the rise of the millennial demographic to claim that BTC could become a “globally used digital gold and reserve asset.”"
  ]

## Learning about XMLHttpRequest()

```js
let req = new XMLHttpRequest();
rew.open(method, URL, [async, user, password]);
//async is false by default
//user password are optional in case of HTTP auth
req.send([body]);
//this sends the request==
//body is optional

//Listen to events for reponse
req.onload = function() {
  console.log(req.status);
  console.log(req.response);
};

req.onerror = function() {
  console.log('Network error');
};

req.onprogress = function(event) {
  //triggers periodically
  //event.loaded - current bytes loaded
  //even.total - total number of bytes
  console.log(event.loaded);
  console.log(event.total);
};
```

//Full Example:

```js
// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', '/article/xmlhttprequest/example/load');

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) {
    // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else {
    // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // responseText is the server
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }
};

xhr.onerror = function() {
  alert('Request failed');
};
```

## Implementation of XMLHttpRequest()

- created an object with a makeRequest method which takes 2 parameters = verb and url
- a second method retrieves the data from the request response
- used JSON stringify and JSON parse to make the output readable in the console
- using the `import{ } from ''` as this is running in the browser and the `request('module')` is not recognised there

## This code will hit the api

```js
let getData = {
  makeRequest: function(verb, url) {
    let xhr = new XMLHttpRequest();
    xhr.open(verb, url);
    xhr.send();

    this._retrieveData(xhr);
  },

  _retrieveData: function(xhr) {
    xhr.onload = function() {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        let response = xhr.response;
        console.log(JSON.stringify(JSON.parse(response), null, 2));
      }
    };
  }
};

export { getData };
```

**How to use:**

Command:
`getData.makeRequest('GET',urlAddress)`

Use this command together with an event listener to trigger the request. I've tested it with a button

Comments:

- url is the path to the node express server
  - node server will send a get request to the 3rd party

## Building a separate API hosted on HEROKU

- This node js api will have an endpoint for retrieving data from guardian api
- It will also have an endpoint for retrieving a summary from aylien api
- developed in node js - keys will be hidden in env variables
- deployed on Heroku
- front end app will send get requests to the api endpoints to retrieve articles and summaries

> I am using several frameworks as this is outside of the SPA

### Step 1

- create node app

`npm init`
`npm install express --save`
`npm install request --save` - maybe
`npm install aylien_textapi --save`
`npm install dotenv --save`

### Step 2 Deploy to heroku

**Install homebrew package manager for mac**
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

**Install heroku cli (used to manage the applications)**
`brew install heroku/brew/heroku`

**In CLI use this command to log in to heroku**
`heroku login`

**Install node (npm gets installed with node)**
`brew install node`

**Prepare the app:**
`heroku create`

- a git remote called heroku is crated and associated with the local git repo

**Deploy to heroku**
`git push heroku master`

**Ensure that at least one instance of the app is running**
`heroku ps:scale web=1`

- this makes the app running in a container

**Open the app**
`heroku open`

**See logs**
`heroku logs --tail`

**Define a procfile**

- declare what command should be executed to start your app

//In procfile add the following:
`web: node index.js`

- web process type: this means that it will be attached to the HTTP routing stack of Heroku and receive web traffic when deployed
- proc files contain process types

Check how many dynos(containers) are running
`heroku ps`

> if no dynos running the app won't be reachable

**Declare app dependencies:**

- heroku recognizes an app as node by the existence of package.json file in the root
- run npm init --yes to create one
- it has the version of node that will be used to run the application on heroku + dependencies that should be installed

To install dependencies run:
`npm install`

**Now the app can be run locally as well**

`heroku local web`

**Push local changes to herkou**
`install a new package`
`run npm install`
`require it in the app`
`git add .`
`git commit`
`git push heroku master`
`heroku open`

- visit site and new page : can specify the page when opening heroku like `heroku open cool` to get to the /cool page

**Add addons**
`heroku addons:create papertrail` -> addon creation and deployment
`heroku addons` -> list all addons
`heroku addons:open papertrail` -> use addon

**Define config vars**

- heroku has config var / locally we have env vars
- external configuration - store keys
- at runtime config vars are exposed as env variables to the application

Example:

- add a new route /times - repeats an action depending on the value of the TIMES env var

Application folder has an .env file with the credentials (add to .gitignore)

At runtime, heroku local will automatically set up the environment based on the contents of the .env file in the local directory

**Access the env variable in heroku (config var)**

`process.env.NAME`

```js
//.env file
TIMES = 2;

//APP access to env var
process.env.TIMES;
```

Set a config var which is available in the app
TO set the config var on Heroku, execute the following
`heroku config:set TIMES=2`

Here we can set our app credentials
`heroku config:set guardianAPIKEY = ....`
`heroku config:set aylienAPIKEY = ....`
`heroku config:set aylienAPPID = ....`
`heroku config:set ENCRYPTION_KEY=my_secret_launch_codes`

[Config vars](https://devcenter.heroku.com/articles/config-vars)

View config vars that are set using heroku config:
`heroku config`

See releases
`heroku release`

- can see commits
- can see changes to config vars
- v1,v2 applications deployed

Roll back releases
`heroku releases:rollback v2`

**How heroku works**

- needs to know which part of your application is runnable
  - rails - rails server
  - node - app.js
- can explicitly declare what can be executed in a procfile
  web: node index.js
- needs to know your dependencies - in package.json on node
- uses git for deploying applications
  - when creating an app with heroku - it associates a new git remote named heroku (not origin)
  - git push heroku master for deploying code
  - your remote is heroku in this case
- when heroku receives the source ode it initiates a build process
  - retrieves dependencies
  - creating assets
  - everything is assembled into a slug (bundle of source code, fetched dependencies ... ready for execution)
- application runs on dynos (unix container) which is preloaded with the slug
- heroku will run 1 web dyno automatically when deploying an app for the first time
  - it will boot a container, load it with the bundle and execute the command associated with the web process type in the procfile)
  - i have control over how many containers are executed - can kill or scale
  - once a new vers of the app is deployed, all dynos get killed and new ones created
- config vars - can run app with custom configuration - configuration sits outside the app code - .env is in git ignore
  - config for an app is stored in config vars
  - we set the key in the heroku cli and it updates the heroku app
  - at runtime these config vars can be exracted
    - ruby app can extract them as such :ENV["ENCRYPTION_KEY"]
  - all containers in an app will have access to the same set of config vars at runtime
- combination of slug and configuration is called a release
- releases are automatically persisted in a ledger
- use heroku releases command to see the audit
  - everytime an application is deployed a new slug is created and a release is generated
  - can roll back releases
  - any material change will result in a new release being created

# UPDATE FORM HERE

## Step 3 Make request to Guardian API from node app

- create env variables for the guardianAPI keys

1. heroku config:set guardianAPI_KEY='your_key'
2. heroku config:set aylAPI_KEY='your_key'
3. heroku config:set aylAPI_APP_ID='your_app_id'
4. check config vars: heroku config

- add the dotenv require command at top of app.js to access the .env variables
  `require('dotenv').config()`

- send a request to the api
- to access get query parameters in express use

  `req.query.category`

## Step 4 Send request from front end to my endpoint

In testing environment

- first, api.js file sends a request to local host
  `http://localhost:5000/articles`
- api.js receives a json package
- api.js console logs the package

Next stage:

- set up the request that needs to be sent to the api with Query elements

  - category:'politics'

- api.js file will send a request to local host in this format
  `http://localhost:5000/articles?category=${category}`

- Set CORS policy on server to only receive requests from my local host for the moment

```js
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['http://127.0.0.1:8080']);
  res.append('Access-Control-Allow-Methods', 'GET');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
```

- once my api endpoint receives the request from the frontend, it will make a request to the Guardian API.
- the response from this request will be sent to the frontend
- in the frontend the I build article objects and I save them in an article list
- last step is to populate the div containing the articles

### Note

- In order to create Article objects and put them in a Article list, I had to import my constructors with the import { } syntax, which meant that i had to change the export syntax
- As i was using node to test my objects, the export default syntax does not work with node
- There is a conflict here which i need to resolve: either a way of working with exports for both front end and back end or do my tests in the front end

## Next

- test the api
- update test for article as I've added new fields
- test my helper methods
- check objects methods as I am not using them....
- add a summary button to link to #articlePage
  - this will send a request to aylien - which will be a link
  - the request response will update the articleSummary page
