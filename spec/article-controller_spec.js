describe('ArticleController', () => {
  it('instantiates a note controller', () => {
    expect(articleController instanceof ArticleController).toBeTrue()
  })

  it('converts the inner text of the relevant HTML elements to the articles', () => {
    var elem = document.getElementById('app');
    expect(elem.innerHTML).toEq('<ul><li><div>art1</div></li><li><div>art2</div></li></ul>')
  })
})