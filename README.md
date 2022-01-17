# News Summary challenge

Setup 
---
```
git clone https://github.com/AlfonsoGhislieri/news-summary-challenge.git
cd news-summary-challenge
npm install
create ./env file (add guardian api key inside -- > API=GUARDIANAPIKEY)
```

Running website
----
```
http-server
http://192.168.68.112:8080/views/
```

![img](https://i.ibb.co/xHX1M9m/Screenshot-2022-01-17-at-09-33-21.png)

Implementation
=====
For this project I decided to create a single page application using the Guardian news API in order to display the headlines from the Guardian.

The entire website is a single page, navigating from the home page to a specific article summary page doesn't refresh the url. 

### `articlesAPi`
This class fetches articles using the Guardian API.
- `loadHeadlines` fetches the the current days top 25 stories.
- `loadArticle` fetches a specific article by id 

###  `articlesModel`
Very basic class that stores articles in an array and allows us to add articles and fetch them to later display them.

### `articlesView`
Takes care of displaying everything on the website. Is injected with the model.
- `displayHeadlines` loads articles from the model and creates a div for each article (with title, img and summary button) --> then appends it directly to the main-container.
  - Clicking on the title will redirect to the articles actual webpage on the Guardian website.
  - Clicking the summary button will change the page to show just that article and a short summary of it which is all created by `displaySingleArticle`.

### `index`
The entire logic of the singe page application is in `index.js` 
- Using an `addEventListener` it checks for any hashchanges and will accordingly display the correct article (loaded by the articlesView by id)
- If there are no hashchanges then the page will display all the articles instead.

## Challenges
------
The main challenge was to try and make a website that would be able to use an API which required an API-key yet would not display it. Unfortunately, this was undertaken as a front-end project and was not achieved. In order to prevent uploading the API key for the Guardian the `./env` and `bundle.js` were gitignored, yet the API key is ultimately still visibile in the bundled code. 
- Would need to run the a backend server and fetch the data from there in order to avoid the API key being visible. A full stack project would be necessary and was out of the scope of this project (goals being making a single page application and fetching and displaying data from an API.)




## TODO
---
- [] Need to add a short summary for every news article specific page