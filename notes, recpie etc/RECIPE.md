# GOALS

- create an app that shows the latest news using the Guardian API.
- Your app will grab all the headlines from the Guardian newspaper API and display them on a page.
- Clicking on a headline will link the user to the actual article page on the Guardian's website.
- You'll write a single page web app.
- You'll write your code in frontend JavaScript, CSS and HTML. You won't use Ruby or backend JavaScript.
- You're strongly encouraged to use the same tools and libraries you've been learning this week:
  - Jest to write your tests
  - The jest-fetch-mock module (or similar) to mock fetch requests (so you don't request the API when running tests!)
  - A build tool such as esbuild to bundle files together

---

# USER STORIES

1. As a busy politician, So I know what the big stories of the day are
   I can see all of today's headlines in one place

2. As a busy politician So that I have something nice to look at
   I can see a relevant picture to illustrate each news article when I browse headlines

3. As a busy politician So I can get a few more details about an important story
   I can click a news article title which links to the original article

4. As a busy politician So I can search what I want to read about
   I can specify a search query on the page and get articles matching this search

---

# ADVANCED USER STORIES

1. As a busy politician So I can quickly read through the essential of today's stories
   I can see a summarised version of of the article

To get a summary of an article's content, you'll need to use the Aylien API endpoint, which means integrating and calling another HTTP endpoint from a different API. This mean you'll need to first fetch articles from the Guardian API, then use the Aylien API to summarise the content — you'll need to use promises or callbacks to call both APIs and to handle the flow of control.

2. As a busy politician Just in case my laptop breaks I can read the site comfortably on my phone

3. As a busy politician So I make my news reading more fun
   I can see whizzy animations in the app

---

# CLASSES AND METHODS

class GuardianApi {
loadArticles(callback, errorCallback) {
fetch("https://content.guardianapis.com/search?api-key=55e5d388-8b9e-477c-b420-c20a69c2be80")
.then((response) => response.json())
.then((data) => {
callback(data);
})
.catch(() => {
errorCallback();
});
}

class ArticleModel {
constructor() {
this.articles = [];
}

getArticles() {
return this.articles;
}

addArticles(article) {
this.articles.push(article);
}

setArticle(article) {
article.forEach((art) => this.addArticle(art));
}

reset() {
this.article = [];
}
}

class ArticleView {
constructor(model, api) {
this.model = model;
this.api = api;
this.mainContainerEl = document.querySelector("#main-container");

    document.querySelector("#").addEventListener("click", () => {
      const newArticle = document.querySelector("#").value;
      this. ///........./////////addNewArticle(newArticle);
    });

}

displayArticlesFromApi() {
this.api.loadArticles(
(repoData) => {
this.model.setArticles(repoData);
this.displayArticles();
},
() => {
this.displayError();
}
);
}

displayArticles() {
const Articles = this.model.getArticles();

      });
    });

}

displayError() {
let errorMessage = document.createElement("div");
errorMessage.className = "error";
errorMessage.textContent = "Oops, something went wrong!";
this.mainContainerEl.append(errorMessage);
}
}

---

# TESTS

- The Guardian API is severely rate-limited.
- Please stub your tests so we don't exceed the daily limit. Otherwise, all requests will be rejected and everyone's apps will stop working!

GUARDIAN API TESTS

const GuardianApi = require("./GuardianApi");
require("jest-fetch-mock").enableMocks();

describe("Client class", () => {
beforeEach(() => {
fetch.resetMocks();
});
it("calls fetch and loads data", (done) => {
const client = new GuardianApi();
fetch.mockResponseOnce(
JSON.stringify({
name: ["This Article is coming from the server"],
})
);
client.loadArticles((callback) => {
expect(callback.name).toEqual(["This Article is coming from the server"]);
done();
});
});

ARTICLES MODEL TESTS

const ArticlesModel = require("./ArticlesModel.js");

describe("ArticlesModel", () => {
it("returns empty array", () => {
const model = new ArticlesModel();
expect(model.getArticles()).toEqual([]);
});

it("returns not empty array", () => {
const model = new ArticleModel();
model.addArticle("Boris Johnson a big bumbahole");
model.addArticle("Mostly bad stuff");
expect(model.getArticles()).toEqual(["Boris Johnson a big bumbahole", "Mostly bad stuff"]);
});

it("returns empty array after reset", () => {
const model = new ArticlesModel();
model.addArticle("Boris Johnson a big bumbahole");
model.addArticle("Mostly bad stuff");
model.reset();
expect(model.getArticles()).toEqual([]);
});
});

ARTICLES VIEW TESTS

/\*\*

- @jest-environment jsdom
  \*/

const fs = require("fs");
const ArticlesView = require("./ArticlesView.js");
const ArticlesModel = require("./ArticlesModel.js");

describe("ArticlesView", () => {
// it("adds a new Article", () => {
// let receivedArticleData;
// const mockApi = {
// createArticle: (newArticle) => {
// receivedArticleData = newArticle;
// },
// };
// const view = new ArticlesView(model, mockApi);
// view.addNewArticle("This is a Article");
// expect(receivedArticleData).toEqual("This is a Article");
// });

// both do the same thing (test above and below) - jest.fn is very useful tool

it("adds a new Article", () => {
document.body.innerHTML = fs.readFileSync("./index.html");
const model = new ArticlesModel();
const mockApi = { createArticle: jest.fn() };
const view = new ArticlesView(model, mockApi);
view.addNewArticle("This is a Article");
expect(mockApi.createArticle).toHaveBeenCalledWith("This is a Article");
});

it("returns Articles", () => {
document.body.innerHTML = fs.readFileSync("./index.html");
const model = new ArticlesModel();
const mockApi = { createArticle: jest.fn() };
const view = new ArticlesView(model, mockApi);
model.addArticle("go to the gym");
view.displayArticles();
expect(document.querySelectorAll("div.Article").length).toEqual(1);
});

it("adds a new Article", () => {
document.body.innerHTML = fs.readFileSync("./index.html");
const model = new ArticlesModel();
const mockApi = { createArticle: jest.fn() };
const view = new ArticlesView(model, mockApi);
const input = document.querySelector("#add-Article-input");
input.value = "My new amazing test Article";
const button = document.querySelector("#add-Article-button");
button.click();
expect(document.querySelectorAll("div.Article").length).toEqual(1);
expect(document.querySelectorAll("div.Article")[0].textContent).toEqual(
"My new amazing test Article"
);
});

it("adds multiple Articles new Article", () => {
document.body.innerHTML = fs.readFileSync("./index.html");
const model = new ArticlesModel();
const mockApi = { createArticle: jest.fn() };
const view = new ArticlesView(model, mockApi);
const input = document.querySelector("#add-Article-input");
input.value = "My new amazing test Article";
const button = document.querySelector("#add-Article-button");
button.click();
const input2 = document.querySelector("#add-Article-input");
input2.value = "Foobar";
button.click();
expect(document.querySelectorAll("div.Article").length).toEqual(2);
expect(document.querySelectorAll("div.Article")[0].textContent).toEqual(
"My new amazing test Article"
);
});
});

---

# Articles

Guardian API key: 55e5d388-8b9e-477c-b420-c20a69c2be80
