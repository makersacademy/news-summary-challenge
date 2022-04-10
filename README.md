# News Summary Challenge

This is a single web page that shows the latest news using the Guardian API. The aim of the challenge is to practice writing code in frontend JavaScript, CSS and HTML.

## Description

The app grabs all the headlines from the Guardian newspaper API and display them on a
page. Clicking on a headline links the user to the actual article page on the Guardian's website.

## How the webpage looks like

![screenshot](https://github.com/valentina-maggio/news-summary/blob/main/public/images/Screenshot%201.png?raw=true)
![screenshot2](https://github.com/valentina-maggio/news-summary/blob/main/public/images/Screenshot%202.png?raw=true)

## How to run the app locally

* Clone this repo
* Install Node (and nvm if not previously installed)
* Move to the project directory
* Run npm install to install all dependencies
* Install Esbuild with `npm install -g esbuild`
* Run the command `npm run build`
* Type `open index.html` in the command line to visit the we page

### Note on API credentials

The credentials are not uploaded in the current folder. Please use the guardianApiKeyTemplate.js to save your API key and follow the instructions saved in the file.

## How to run the tests

* Make sure to be in the project directory
* Run `npm install jest` to install the testing framework
* Use `jest` to run the tests. The output will also show a table with the test coverage
* To check the code syntax, run `npx eslint "**"` or `npx eslint (FILENAME)`

## Approach to build the app

Below are the stories I used to build the app:

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

### Building process

* First I set up the project and installed all the dependencies required
* Following a TDD approach I started creating the View for the newsSummary class
* I built the first user story to display the news headlines
* I created a guardianApi class to retrieve the headlines from the Guardian website
* Then I implemented the other user stories to display images and clickable links for each news
* I also decided to create the Model to extract some logic from the View
* I added a new method in the API class to allow the user to search for a specific topic and retrieve relevant news
* All the steps above followed a TDD approach
* Eventually I created a CSS stylesheet to style the webpage and updated the HTML structure accordingly

### Issues

I faced a couple of issues during the building of the project:

1) I initially decided to use Dotenv to store the API credentials but I then found out Dotenv only works for the backend. I therefore decided to store the keys in a JS file which I added to the .gitignore file to keep the credentials safe. I guess there are better ways to store credentials for frontend applications.
2) I had some troubles mocking the Guardian API when I added the second method and in the end I couldn't test that last method.

## Technologies used

* JavaScript
* HTML
* CSS
* Jest
* Esbuild
* ESLint

## Future implementations

Apart from fixing the above issues, below are some extra user stories that I'd like to implement in the future. The first one will require the use of another API to create summaries of the Guardian articles (Aylien API).

```
As a busy politician
So I can quickly read through the essential of today's stories
I can see a summarised version of of the article 
```

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
