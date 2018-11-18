import { beforeFunctions, padding, describe, it, beforeEach, expect } from "../vendor/tester/tester.js"
import { articleList, articleListView, article1, article2, articleView1, controller, htmlMock, passedURL, json, response, setupTestVariables, stubGetElementById, stubFetch } from "./spec-helper.js";

describe("ArticleController", function() {
  beforeEach(setupTestVariables);
  beforeEach(stubGetElementById);

  describe(".loadHTML()", function() {
    it("adds html from article view to location", function() {
      controller.loadHTML(articleView1, "articleContainer");
      expect(htmlMock.articleContainer.innerHTML).toBe('<p class="article-content">TEST_CONTENT1</p>');
    });
    it("adds html from article list view to location", function() {
      controller.loadHTML(articleListView, "articleListContainer");
      expect(htmlMock.articleListContainer.innerHTML).toBe("<ul><li><div class='article-head'><div class='article-image'><img src='http://img1.com'></div><div class='article-headline'><a href='#articles/1'>Headline1</a></div></div><div class='article-content-container' id='content-1'></div></li><li><div class='article-head'><div class='article-image'><img src='http://img2.com'></div><div class='article-headline'><a href='#articles/2'>Headline2</a></div></div><div class='article-content-container' id='content-2'></div></li></ul>");
    });
  });
  describe("listenForHashChange", function() {
    it("changes articleContainer html on hashchange", function() {
      controller.listenForHashChange();
      window.location.hash = "articles/2";
      var hashchange = new Event("hashchange");
      window.dispatchEvent(hashchange);
      expect(htmlMock["content-2"].innerHTML).toBe('<p class="article-content">TEST_CONTENT2</p>');
    });
  });
});
