'use strict';

describe('ArticleController', function () {

  describe('#getArticles', function () {
    beforeEach(function () {
      jasmine.Ajax.install();
    })

    afterEach(function () {
      jasmine.Ajax.uninstall();
    })

    it('gets articles for the current date from the Guardian News API', function () {
      let guardianSpy = jasmine.createSpy()
      let today = new Date().toISOString().slice(0, 10)
      let articleController = new ArticleController(guardianSpy)

      articleController.getTodaysArticles()
      let mostRecentAjaxRequest = jasmine.Ajax.requests.mostRecent()
      expect(mostRecentAjaxRequest.url).toContain(`search?from-date=${today}&show-elements=image&show-fields=headline%2Cthumbnail%2Cshort-url`)
      expect(mostRecentAjaxRequest.method).toBe('GET');
    });

    it('returns a list of article objects', function () {
      let callback = jasmine.createSpy()
      let articleController = new ArticleController("mockAPI")
      articleController.getTodaysArticles(callback)
      let mostRecentAjaxRequest = jasmine.Ajax.requests.mostRecent()
      let fakeResponse = {
        "response": {
          "status": "ok",
          "userTier": "developer",
          "total": 160,
          "startIndex": 1,
          "pageSize": 10,
          "currentPage": 1,
          "pages": 16,
          "orderBy": "newest",
          "results": [
            {
              "id": "football/live/2020/oct/18/tottenham-hotspur-v-west-ham-united-premier-league-live",
              "type": "liveblog",
              "sectionId": "football",
              "sectionName": "Football",
              "webPublicationDate": "2020-10-18T16:48:28Z",
              "webTitle": "Tottenham Hotspur v West Ham United: Premier League – live!",
              "webUrl": "https://www.theguardian.com/football/live/2020/oct/18/tottenham-hotspur-v-west-ham-united-premier-league-live",
              "apiUrl": "https://content.guardianapis.com/football/live/2020/oct/18/tottenham-hotspur-v-west-ham-united-premier-league-live",
              "fields": {
                "headline": "Tottenham Hotspur v West Ham United: Premier League – live!",
                "shortUrl": "https://gu.com/p/f6t6p",
                "thumbnail": "https://media.guim.co.uk/eac482bd4cb19b6b0bffa9397a50fe52a4450154/329_304_3592_2155/500.jpg"
              },
              "isHosted": false,
              "pillarId": "pillar/sport",
              "pillarName": "Sport"
            },
            {
              "id": "world/live/2020/oct/18/coronavirus-live-news-curfew-starts-for-millions-in-france-victoria-set-to-ease-restrictions",
              "type": "liveblog",
              "sectionId": "world",
              "sectionName": "World news",
              "webPublicationDate": "2020-10-18T16:36:03Z",
              "webTitle": "Coronavirus live news: senior PLO figure hospitalised; Swiss prepare for more restrictions",
              "webUrl": "https://www.theguardian.com/world/live/2020/oct/18/coronavirus-live-news-curfew-starts-for-millions-in-france-victoria-set-to-ease-restrictions",
              "apiUrl": "https://content.guardianapis.com/world/live/2020/oct/18/coronavirus-live-news-curfew-starts-for-millions-in-france-victoria-set-to-ease-restrictions",
              "fields": {
                "headline": "Coronavirus live news: senior PLO figure hospitalised; Swiss prepare for more restrictions",
                "shortUrl": "https://gu.com/p/f6ez4",
                "thumbnail": "https://media.guim.co.uk/7b23feaad9a2c70de99c45985d747a84d3bdbaa2/0_68_4516_2710/500.jpg"
              },
              "isHosted": false,
              "pillarId": "pillar/news",
              "pillarName": "News"
            }]
        }
      }

      mostRecentAjaxRequest.respondWith({
        status: 200,
        contentType: "text/html",
        responseText: JSON.stringify(fakeResponse)
      })

      let article1 = new Article(
        "football/live/2020/oct/18/tottenham-hotspur-v-west-ham-united-premier-league-live",
        "Tottenham Hotspur v West Ham United: Premier League – live!",
        "https://media.guim.co.uk/eac482bd4cb19b6b0bffa9397a50fe52a4450154/329_304_3592_2155/500.jpg",
        "https://gu.com/p/f6t6p")
      let article2 = new Article(
        "world/live/2020/oct/18/coronavirus-live-news-curfew-starts-for-millions-in-france-victoria-set-to-ease-restrictions",
        "Coronavirus live news: senior PLO figure hospitalised; Swiss prepare for more restrictions",
        "https://media.guim.co.uk/7b23feaad9a2c70de99c45985d747a84d3bdbaa2/0_68_4516_2710/500.jpg",
        "https://gu.com/p/f6ez4")

      let convertedArticles = [article1, article2]

      expect(callback).toHaveBeenCalledWith(convertedArticles);
    })
  })
})