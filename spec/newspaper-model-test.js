describe('Newspaper Model', function () {
  it('has an array to store Articles', function () {
    var newspaper = new NewspaperModel();
    expect(newspaper._articles).toBeInstanceOf(Array)
  })

  it('has an Article Count property', function () {
    var newspaper = new NewspaperModel();
    expect(newspaper.articleCount).toEqual(0)
  })

  it('holds the Article Constructor as a property', function () {
    var newspaper = new NewspaperModel()
    expect(newspaper.articleModel).toEqual(Article)
  })

  it('has a method to create and add a new Article', function () {
    var newspaper = new NewspaperModel();
    newspaper.newArticle()
    expect(newspaper._articles[0]).toBeInstanceOf(Article)
  })

  it('creating a new Article iterates the Article Count and is assigned to the Article Id', function () {
    var newspaper = new NewspaperModel();
    newspaper.newArticle()
    expect(newspaper._articles[0].getId()).toEqual(1)
  })

  it('has a getter method to return all Articles', function () {
    var newspaper = new NewspaperModel();
    newspaper._articles = ['article1', 'article2']
    expect(newspaper.getAllArticles()).toBeInstanceOf(Array)
    expect(newspaper.getAllArticles()).toInclude('article1')
    expect(newspaper.getAllArticles()).toInclude('article2')
  })

})
