describe('Newspaper Model', function () {
  it('has an array to store Articles', function () {
    var newspaper = new Newspaper();
    expect(newspaper._articles).toBeInstanceOf(Array)
  })

  it('has a method to add an Article', function () {
    var newspaper = new Newspaper();
    var articleDouble = 'article'
    newspaper.addArticle(articleDouble)
    expect(newspaper._articles).toInclude(articleDouble)
  })

  it('has a getter method to return all Articles', function () {
    var newspaper = new Newspaper();
    newspaper.addArticle('article1')
    newspaper.addArticle('article2')
    expect(newspaper.getAllArticles()).toBeInstanceOf(Array)
    expect(newspaper.getAllArticles()).toInclude('article1')
    expect(newspaper.getAllArticles()).toInclude('article2')
  })

})
