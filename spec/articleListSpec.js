describe('Viewing articles in a list', function(){

  articlelist = new ArticleList()
  article = new Article('headline', 'body', 'url')

  it('starts as an empty array', function(){
    assert.isEqual(articlelist.articles.length, 0)
  })

  it('create and add an article to an array', function(){
    articlelist.addArticle(article)
    assert.isEqual(articlelist.articles.length, 1)
  })
})
