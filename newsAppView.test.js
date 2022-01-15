/**
 * @jest-environment jsdom
 */

const NewsAppView = require('./newsAppView');
const fs = require('fs');

const mockArticle = {
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
  "pillarName": "Sport"
}

const mockModel = {
  articles: [mockArticle]
}

const mockApi = {

}

describe("NewsAppView", () => {
  it("should be able to display articles from the model", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    let view = new NewsAppView(mockModel, mockApi);
    view.displayArticles();
    expect(document.querySelectorAll(".article").length).toBe(1);
  })
})
