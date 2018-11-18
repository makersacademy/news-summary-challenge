import { beforeFunctions, padding, describe, it, beforeEach, expect } from "../vendor/tester/tester.js"
import { articleList, articleListView, article1, article2, articleView1, controller, htmlMock, passedURL, json, response, setupTestVariables, stubGetElementById, stubFetch } from "./spec-helper.js";

describe("Article", function() {
  beforeEach(setupTestVariables);
  beforeEach(stubFetch);

});
