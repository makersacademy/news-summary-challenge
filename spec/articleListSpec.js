'use strict';

aWholeNewWorld('ArticleList', function () {
  
  articleList = new ArticleList();

  it('is created with an empty array', function () {
    wish(articleList.allArticles().length).toEqual(0)
  })

  var articleList
})