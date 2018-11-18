import { beforeFunctions, padding, describe, it, beforeEach, expect } from "../vendor/tester/tester.js"
import { articleList, articleListView, article1, article2, articleView1, controller, htmlMock, passedURL, json, response, setupTestVariables, stubGetElementById, stubFetch } from "./spec-helper.js";

describe("ArticleView", function() {
  beforeEach(setupTestVariables);
  describe(".render()", function() {
    it("returns html of article content", function() {
      article1.content = "CONTENT";
      expect(articleView1.render()).toBe('<p class="article-content">CONTENT</p>');
    });
  });
});
