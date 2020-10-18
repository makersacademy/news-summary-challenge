'use strict';

describe('ArticleService', function() {

  describe('#getArticles', function() {
    beforeEach(function(){
      jasmine.Ajax.install();
    })

    afterEach(function() {
      jasmine.Ajax.uninstall();
    })

    it('gets articles for the current date from the Guardian News API', function () {
      let guardianSpy = jasmine.createSpy()
      let today = new Date().toISOString().slice(0, 10)
      let articleService = new ArticleService(guardianSpy)

      articleService.getTodaysArticles()
      let mostRecentAjaxRequest = jasmine.Ajax.requests.mostRecent()
      console.log(mostRecentAjaxRequest)
      expect(mostRecentAjaxRequest.url).toContain(`search?from-date=${today}&show-elements=image&show-fields=headline%2Cthumbnail%2Cshort-url`)
      expect(mostRecentAjaxRequest.method).toBe('GET');
    });

    it('returns a list of article objects', function () {
      
    });

  })



})