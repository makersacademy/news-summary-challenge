describe('ArticleController', () => {
  it('instantiates a note controller', () => {
    expect(articleController instanceof ArticleController).toBeTrue()
  })

  it('converts the inner text of the relevant HTML elements to the articles', () => {
    var articleListTest = new ArticleList()
    articleListTest.addArticle(new Article("art1"))
    articleListTest.addArticle(new Article("art2"))
    var articleControllerTest = new ArticleController(articleList)
    articleControllerTest.insertHtml()
    var elem = document.getElementById('app');
    expect(elem.innerHTML).toEq('<div><a href="#articles/0">art1</a></div><div><a href="#articles/1">art2</a></div>')
  })

  it ('changes content of page to article clicked on', () => {
    // document.getElementById("myCheck").click()
    pageText = document.getElementById('app').innerText;
    expect(pageText).toEq('summary')
  })
})