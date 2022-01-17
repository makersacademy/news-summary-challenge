/**
 * @jest-environment jsdom
 */

const NewsAppView = require('./newsAppView');
const fs = require('fs');


describe("NewsAppView", () => {
  it("should be able to display articles from the model", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    let view = new NewsAppView(mockModel, mockApi);
    view.displayArticles();
    expect(document.querySelectorAll(".article").length).toBe(1);
  })
  it("should be able to show images on the page", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    let view = new NewsAppView(mockModel, mockApi);
    view.displayArticles();
    expect(document.querySelectorAll("img").length).toBe(1);
  })
  it("adds a summary on click", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    let view = new NewsAppView(mockModel, mockApi);
    view.displayArticles();
    let article = document.querySelector(".article");
    article.click();
    expect(document.querySelectorAll(".summary").length).toBe(1);
  })
  it("should be able to clear summaries", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    let view = new NewsAppView(mockModel, mockApi);
    view.displayArticles();
    let article = document.querySelector(".article");
    article.click();
    view.clearSummaries();
    expect(document.querySelectorAll(".summary").length).toBe(0);
  })
  it("summaries should only open once", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    let view = new NewsAppView(mockModel, mockApi);
    view.displayArticles();
    let article = document.querySelector(".article");
    article.click();
    article.click();
    article.click();
    expect(document.querySelectorAll(".summary").length).toBe(1);
  })
  it("summaries should have a read more link", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    let view = new NewsAppView(mockModel, mockApi);
    view.displayArticles();
    let article = document.querySelector(".article");
    article.click();
    expect(document.querySelectorAll(".readmore").length).toBe(1);
  })
})

const mockArticle =   {
  "id": "football/live/2022/jan/14/brighton-v-crystal-palace-premier-league-live-updates",
  "type": "liveblog",
  "sectionId": "football",
  "sectionName": "Football",
  "webPublicationDate": "2022-01-14T20:06:50Z",
  "webTitle": "Brighton v Crystal Palace: Premier League – live!",
  "webUrl": "https://www.theguardian.com/football/live/2022/jan/14/brighton-v-crystal-palace-premier-league-live-updates",
  "apiUrl": "https://content.guardianapis.com/football/live/2022/jan/14/brighton-v-crystal-palace-premier-league-live-updates",
  "isHosted": false,
  "pillarId": "pillar/sport",
  "pillarName": "Sport",
  "fields": {
    "body": "<p>Fake article</p><p>More fake text</p>",
    "thumbnail": "https://media.guim.co.uk/b896983b0dea0fd642b6fc945688da0cb050f4ca/0_97_828_497/500.jpg"
  }
}

const mockModel = {
  articles: [mockArticle],
  getSummary: () => ["text"]
}

const mockApi = {

}
