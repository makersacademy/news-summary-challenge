'use strict';

(function() {
  runner.register(function testArticleInstanceOfArticle() {
    var article = new Article("football/live/2017/dec/10/liverpool-v-everton-premier-league-live", "Sport", "Liverpool v Everton: Premier League – live!", "test");
    return assert.isTrue(article instanceof Article);
  });

  runner.register(function testGetId() {
    var article = new Article("football/live/2017/dec/10/liverpool-v-everton-premier-league-live", "Sport", "Liverpool v Everton: Premier League – live!", "test");
    return assert.returns(article.getId(), "football/live/2017/dec/10/liverpool-v-everton-premier-league-live");
  })

  runner.register(function testGetSectionId() {
    var article = new Article("football/live/2017/dec/10/liverpool-v-everton-premier-league-live", "Sport", "Liverpool v Everton: Premier League – live!", "test");
    return assert.returns(article.getSectionId(), "Sport");
  })

  runner.register(function testGetArticleTitle() {
    var article = new Article("football/live/2017/dec/10/liverpool-v-everton-premier-league-live", "Sport", "Liverpool v Everton: Premier League – live!", "test");
    return assert.returns(article.getArticleTitle(), "Liverpool v Everton: Premier League – live!");
  })

  runner.register(function testGetImageURL() {
    var article = new Article("football/live/2017/dec/10/liverpool-v-everton-premier-league-live", "Sport", "Liverpool v Everton: Premier League – live!", "test");
    return assert.returns(article.getImageURL(), "test");
  })

})();
