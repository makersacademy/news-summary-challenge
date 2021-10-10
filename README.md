# Crypto News

A single page web app which reads and summarises cryptocurrency news from the Guardian API.

The application makes a request to Pipedream, which I have configured to send a response back to my client with the latest stories related to Blockchain and Cryptocurrency from the Guardian.

### Preview

![](https://github.com/EMDevelop/public_resources/blob/main/gifs/CryptoNews/preview.gif)

### How To Run

- You will need a running version of `node` and `npm`
- clone this repository: `git clone https://github.com/EMDevelop/HeadlineNews.git`
- install single dependency (http-server) by running `npm install`
- Run `npm start` to launch the UI
- Run `npm test` to launch testing framework

#### testing

- Built using my own self-built testing framework
- I've included a single back end test to ensure 10 items are loaded each time

#### User Stories

```
As a busy politician
I can see all of today's headlines in one place
So I know what the big stories of the day are

As a busy politician
I can see a relevant picture to illustrate each news article when I browse headlines
So that I have something nice to look at

As a busy politician
I can click a news headline to see a summary and a photo of the news article
So that I can get an in depth understanding of a very important story

As a busy politician
I can see click a news article summary title which links to the original article
So I can get a few more details about an important story

As a busy politician
I can read the site comfortably on my phone
Just in case my laptop breaks

As a busy politician
I can see whizzy animations in the app
To make my news reading more fun
```

#### Domain Model

`class: Headlines`

| Methods         | Attributes     |
| --------------- | -------------- |
| getStories()    | stories: Array |
| getStory(index) |                |

`class: Story`

| Methods | Attributes                 |
| ------- | -------------------------- |
|         | image: String(URL)         |
|         | title: String              |
|         | body: String               |
|         | originalStory: String(URL) |

#### Interface

- Fetch
  - Stories (image, title, body)

#### setup

```
touch README.md
echo "# HeadlineNews" >> README.md
mkdir spec
cd spec
mkdir frontend
mkdir backend
cd frontend
mkdir specFunctions
cd specFunctions
touch matchers.js
touch specCommands.js
....
touch spec/backend/featureSpec.js
mkdir public
mkdir public/styles
cd public/styles
..
..
mkdir src
touch src/interface.js
npm init
npm install http-server
touch .gitignore
echo "node_modules" >> .gitignore
git add .gitignore
git commit -m "Adding .gitignore"
touch spec/spec.html
mkdir views
touch views/index.html
```

### Question: Why did my url not work?

##### This works

https://content.guardianapis.com/search?q=blockchain%20AND%20cryptocurrency%20AND%20ethereum%20AND%20bitcoin%20AND%20cardano&show-fields=all&show-elements=all&page=1&api-key=test

##### This complains it doesn't start with `must start with http://content.guardianapis.com`

http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=https://content.guardianapis.com/search?q=blockchain%20AND%20cryptocurrency%20AND%20ethereum%20AND%20bitcoin%20AND%20cardano&show-fields=all&show-elements=all&page=1

##### This has completely different results using the makers api.

https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=blockchain%20AND%20cryptocurrency%20AND%20ethereum%20AND%20bitcoin%20AND%20cardano&show-fields=all&show-elements=all&page=1
