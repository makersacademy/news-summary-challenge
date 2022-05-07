# News Summary Challenge
```
      __...--~~~~~-._/ \_.-~~~~~--...__
     /                |  (not) The     \ 
    /                 |  Guardian       \                   
   /                  |                  \
  /__...--~~~~~~-._ _ _ _.-~~~~~~---....__\ 
 /__.....=====~~~~._/   \_.~~~~=====.....__\              
```

## Task
I have been tasked to create a web app that will grab all the headlines using the Guardian API. Clicking these headlines will then redirect users towards the corresponding articles on the Guardian's website. I will be doing this by coding in frontend Javascript and will be using HTML and CSS to display the website. I will be writing my code with a TDD approach and will be using Jest for testing.

## Instructions
Clone this repository to your desired location using `git clone https://github.com/mcsuGH/news-summary-challenge.git`.\
\
You can then run `npm install` whilst in the main directory in your terminal to install any dependencies and then use the command `jest` to run the tests.\
\
In order to use this app, please sign up for an API key from the Guardian and create a file named `apiKey.js` inside the main directory. Inside the `apiKey.js` file write `module.exports =  'write-your-api-key-here';` with your API key given from The Guardian. This will then allow the app to use your API key to fetch the articles from The Guardian's API, which will be used to populate the webpage with articles.\
\
Once this is done, use `npm run build` and then while in the main directory inside your terminal, you can use the command `open index.html` to open the web app.

## User Stories
```
As a busy politician,
So I know what the big stories of the day are,
I can see all of today's headlines in one place

As a busy politician,
So that I have something nice to look at,
I can see a relevant picture to illustrate each news article when I browse headlines

As a busy politician,
So I can get a few more details about an important story,
I can click a news article title which links to the original article

As a busy politician,
So I can search what I want to read about,
I can specify a search query on the page and get articles matching this search
```

## References
```
https://www.asciiart.eu/books/books

```
used the above for ASCII art and then edited it.


## Functionality yet to be added
```
As a busy politician,
So I can quickly read through the essential of today's stories,
I can see a summarised version of of the article 

As a busy politician,
Just in case my laptop breaks,
I can read the site comfortably on my phone

As a busy politician,
So I make my news reading more fun,
I can see whizzy animations in the app
```
user stories not yet implemented
