(function (exports) {
  let singleView

  function displaySingleArticle () {
    console.log('displaySingleArticle')
    singleView = new SingleView
    let article = new Article('I am the title', 'apiUrl', 'I am the Body')
    expect(singleView.display(article)).toEqual('<h1>I am the title</h1><div>I am the Body</div>')
  }

  displaySingleArticle()
})(this)