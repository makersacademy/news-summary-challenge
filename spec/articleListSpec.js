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

  it('can return a list of all article headlines in array', function(){
    assert.arrayContain(articlelist.listArticles(), article )
  })

  idArticle = new Article('headline2', 'body2', 'url2')

  it('articles can be selected by id', function(){
    articlelist.addArticle(idArticle)
    test = articlelist.listArticleById(1)
    assert.isEqual(test, idArticle)
  })
})
