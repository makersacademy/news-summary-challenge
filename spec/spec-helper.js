import { ArticleList } from "../src/article-list.js";
import { ArticleListView } from "../src/article-list-view.js";
import { ArticleView } from "../src/article-view.js";
import { ArticleController } from "../src/article-controller.js";

var articleList;
var articleListView ;
var article1;
var article2;
var articleView1;
var controller;
var htmlMock;
var passedURL;
var json;
var response;

function setupTestVariables() {
  articleList = new ArticleList();
  articleList.create("http://test1.com", "Headline1", "http://img1.com");
  articleList.create("http://test2.com", "Headline2", "http://img2.com");
  articleListView = new ArticleListView(articleList);
  article1 = articleList.articles[0];
  article1.content = "TEST_CONTENT1";
  article2 = articleList.articles[1];
  article2.content = "TEST_CONTENT2";
  articleView1 = new ArticleView(article1);
  controller = new ArticleController(articleList);
}

function stubGetElementById() {
  document.getElementByIdOriginal = document.getElementById;
  htmlMock = {
    articleContainer: {
      innerHTML: "string"
    },
    articleListContainer: {
      innerHTML: "string"
    },
    "content-2": {
      innerHTML: "string"
    }
  };
  document.getElementById = function(id) { return htmlMock[id]; };
}

// stub fetch() to return a promise with custom response object
function stubFetch() {
  passedURL = "none";
  json = {
    text: "TEXT",
    response: {
      results: [
        {
          webTitle: "HEADLINE1",
          webUrl: "http://test1.com",
          fields: {
            thumbnail: "http://img1.com"
          }
        },
        {
          webTitle: "HEADLINE2",
          webUrl: "http://test2.com",
          fields: {
            thumbnail: "http://img2.com"
          }
        }
      ]
    }
  };
  response = { json: () => { return json; } };
  window.fetch = function(url) {
    passedURL = url;
    return new Promise(function(resolve) {
      resolve(response);
    });
  };
}

export { articleList, articleListView, article1, article2, articleView1, controller, htmlMock, passedURL, json, response, setupTestVariables, stubGetElementById, stubFetch };
