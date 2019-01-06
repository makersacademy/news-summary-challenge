var sinon = require('sinon');

var NewsListModule = require('../src/news-list-model.js');

const guardianAPIMockResponseJson = `{
  "response": {
    "status": "ok",
    "userTier": "developer",
    "total": 202682,
    "startIndex": 1,
    "pageSize": 10,
    "currentPage": 1,
    "pages": 20269,
    "orderBy": "newest",
    "results": [
      {
        "id": "politics/2019/jan/06/theresa-may-pleads-for-eu-to-give-ground-brexit-deal",
        "type": "article",
        "sectionId": "politics",
        "sectionName": "Politics",
        "webPublicationDate": "2019-01-06T21:20:18Z",
        "webTitle": "Theresa May pleads for EU to give ground and rescue Brexit deal",
        "webUrl": "https://www.theguardian.com/politics/2019/jan/06/theresa-may-pleads-for-eu-to-give-ground-brexit-deal",
        "apiUrl": "https://content.guardianapis.com/politics/2019/jan/06/theresa-may-pleads-for-eu-to-give-ground-brexit-deal",
        "fields": {
          "headline": "Theresa May pleads for EU to give ground and rescue Brexit deal",
          "body": "OKOKOKOK",
          "thumbnail": "https://media.guim.co.uk/0e2122806ba475dda0f8747ea96dad2db964f596/0_0_3240_1944/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/news",
        "pillarName": "News"
      },
      {
        "id": "politics/2019/jan/06/brexit-as-parliament-returns-to-work-what-happens-now",
        "type": "article",
        "sectionId": "politics",
        "sectionName": "Politics",
        "webPublicationDate": "2019-01-06T17:53:39Z",
        "webTitle": "Brexit: as parliament returns to work, what happens now?",
        "webUrl": "https://www.theguardian.com/politics/2019/jan/06/brexit-as-parliament-returns-to-work-what-happens-now",
        "apiUrl": "https://content.guardianapis.com/politics/2019/jan/06/brexit-as-parliament-returns-to-work-what-happens-now",
        "fields": {
          "headline": "Brexit: as parliament returns to work, what happens now?",
          "body": "TRLOLOLOL",
          "thumbnail": "https://media.guim.co.uk/09d78274b4ef05e422ec1ca26411640a4db9f6db/0_89_4134_2480/500.jpg"
        },
        "isHosted": false,
        "pillarId": "pillar/news",
        "pillarName": "News"
      }
    ]
  }
}`

describe('NewsList', function() {

  beforeEach(function () {
    this.xhr = sinon.useFakeXMLHttpRequest();
    var requests = this.requests = [];
    this.xhr.onCreate = function (xhr) {
      requests.push(xhr);
    };
  });

  afterEach(function () {
    this.xhr.restore();
  });

  it("makes a GET request for todo items", function () {
    var callback = sinon.spy();
    var aNewsList = new NewsListModule.NewsList();
    this.server.respondWith("GET", "https://content.guardianapis.com/search", [
        200, { "Content-Type": "application/json" }, guardianAPIMockResponseJson,
      ]);
    this.server.respnd();
    console.log(aNewsList.newslist);
  });

});