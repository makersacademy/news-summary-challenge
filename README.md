# News Summary App
This is a single web page application listing today's news headlines from the Guardian API. The headline and associated image are displayed on the main page. The headlines are links which, when clicked, create a hash url which reveal the body of that news article. The user is able to use the return button on their browser to get back to the headline page which has an updated list of the most current articles.

### Technologies
- This application uses frontend javascript, CSS and HTML
- The guardian API is used for news information
- An http-server has been installed with npm
- Created own testing framework which can be run by inputting this to your terminal:
```
open TestRunner.html
```

### Set Up
1) Clone this repository
2) In your terminal, in order to install required dependencies, run:
```
$ npm install
```
3) In your terminal, to open the http-server, run:
```
$ node node_modules/http-server/bin/http-server
```
4) Go to localhost:8080 in your browser

### Future Improvements
- Further refactoring
- Improve file sorting into different directories
- Improve tests - stubbing of the controller
- Use Aylien text summarisation API to summarise the articles
- Make the app phone friendly
- Add animations
- Use the makers API key instead of hardcoding - however when attempted, this did prevent accessing the headline and thumbnail field

### User Stories

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are
```

```
As a busy politician
I can click a link to see the original news article
So that I can get an in depth understanding of a very important story
```

```
As a busy politician
I can see a summary of a news article
So I can get a few more details about an important story
```

```
As a busy politician
I can see a picture to illustrate each news article when I browse headlines
So that I have something nice to look at
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