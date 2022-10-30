/**
 * @jest-environment jsdom
 */

const GuardianModel = require('../guardianModel');
const NewsView = require('../newsView');
const fs = require('fs');

describe("GuardianView", () => {
  describe("displaying news summary", () => {
    it('shows the headline and picture of one piece of news summary', () => {
      document.body.innerHTML = fs.readFileSync(__dirname + '/../index.html');
      const fakeApi = {
        loadNews: () => {
          // callbackFunction
        }
      }
      const model = new GuardianModel();
      const view = new NewsView(model, fakeApi);
      model.guardianNewsAdd({
        "response": {
          "status":"ok",
          "userTier":"developer",
          "result": [
            {
              "id":"us-news/live/2022/jul/08/biden-abortion-executive-order-access-us-politics-latest-news",
              "type":"liveblog",
              "sectionId":"us-news",
              "sectionName":"US news",
              "webPublicationDate":"2022-07-08T19:54:32Z",
              "webTitle":"Biden signs executive order to protect US abortion access and urges Americans to ‘vote, vote, vote’ – live",
              "webUrl":"https://www.theguardian.com/us-news/live/2022/jul/08/biden-abortion-executive-order-access-us-politics-latest-news",
              "apiUrl":"https://content.guardianapis.com/us-news/live/2022/jul/08/biden-abortion-executive-order-access-us-politics-latest-news",
              "fields":{
                "headline":"Biden signs executive order to protect US abortion access and urges Americans to ‘vote, vote, vote’ – live",
                "byline":"Gloria Oladipo",
                "thumbnail":"https://media.guim.co.uk/4714c3513481bc452fd292a3a4453c8575a65bad/0_106_3500_2099/500.jpg"
              },
              "isHosted":false,
              "pillarId":"pillar/news",
              "pillarName":"News"
            },{
              "id":"football/live/2022/jul/08/germany-v-denmark-womens-euro-2022-live",
              "type":"liveblog",
              "sectionId":"football",
              "sectionName":"Football",
              "webPublicationDate":"2022-07-08T19:50:04Z",
              "webTitle":"Germany v Denmark: Women’s Euro 2022 – live!",
              "webUrl":"https://www.theguardian.com/football/live/2022/jul/08/germany-v-denmark-womens-euro-2022-live",
              "apiUrl":"https://content.guardianapis.com/football/live/2022/jul/08/germany-v-denmark-womens-euro-2022-live",
              "fields":{
                "headline":"Germany v Denmark: Women’s Euro 2022 – live!",
                "byline":"Gregg Bakowski",
                "thumbnail":"https://media.guim.co.uk/0355768d0849c2bed0ce7b67bf38c4f3fafcd4ac/0_34_3500_2100/500.jpg"
              },
              "isHosted":false,
              "pillarId":"pillar/sport",
              "pillarName":"Sport"
            }
          ]
        }
      })
      view.showGuardianNews();
      expect(document.querySelectorAll('a.news-image').length).toStrictEqual(2);
      expect(document.querySelectorAll('div.news-title').length).toStrictEqual(2);
      expect(document.querySelectorAll('div.news-title')[0].innerText).toStrictEqual("Biden signs executive order to protect US abortion access and urges Americans to ‘vote, vote, vote’ – live");
      expect(document.querySelectorAll('div.news-title')[1].innerText).toStrictEqual("Germany v Denmark: Women’s Euro 2022 – live!");
    })
  })
})