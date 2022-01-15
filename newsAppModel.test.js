
const NewsAppModel = require("./newsAppModel");


describe("NewsAppModel", () => {
  it("should be able to add an article", () => {
    let model = new NewsAppModel();
    model.addArticle(mockArticle);
    expect(model.articles[0]).toEqual(mockArticle);
  })
})

const mockArticle = 
  {
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