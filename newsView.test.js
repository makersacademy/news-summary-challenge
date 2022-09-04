/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const ArticleModel = require('./model/articleModel')
const FeedModel = require('./model/feedModel');
const NewsView = require('./newsView')
const NewsApi = require('./newsApi');
require("jest-fetch-mock").enableMocks();

describe('NotesView', () => {
  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it("displays the list of articles", () => {
  
    const feed = new FeedModel;
    const view = new NewsView(feed);
    const exampleResponse = {
      response: {
        results: [
          {
            webTitle: "example headline"
          }
        ]
      }
    }
    feed.setArticles(exampleResponse)
    view.displayArticles()
    expect(document.querySelectorAll('div.article').length).toBe(1)
  })
})