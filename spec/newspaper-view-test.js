describe ('Newspaper View:', function () {
  it('holds a Newspaper Model', function () {
    var newspaperView = new NewspaperView()
    expect(newspaperView.newspaper).toBeInstanceOf(NewspaperModel)
  })

describe ('convert Articles to HTML', function () {
  it ('testing with 1 article', function () {
    var newspaperView = new NewspaperView()
    newspaperView.newspaper.newArticle('Hello World')
    var expectedString = '<ul><li><div id="article-1"><a href="#1">Hello World</a></div></li></ul>'
    expect(newspaperView.headlinesToHtml()).toEqual(expectedString)
  })

  it ('testing with 2 articles', function () {
    var newspaperView = new NewspaperView()
    newspaperView.newspaper.newArticle('Hi Everybody!')
    newspaperView.newspaper.newArticle('Hi Dr. Nick!')
    var expectedString =
      '<ul><li><div id="article-1"><a href="#1">Hi Everybody!</a></div></li>' +
      '<li><div id="article-2"><a href="#2">Hi Dr. Nick!</a></div></li></ul>'
    expect(newspaperView.headlinesToHtml()).toEqual(expectedString)
  })
})

})
