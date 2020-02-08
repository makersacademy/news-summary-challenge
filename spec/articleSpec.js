(function (exports) {
  let article

  (function articleProperties () {
    console.log('articleProperties')
    article = new Article('Storm Ciara to bring severe gales to UK', 'https://www.bbc.co.uk/news/uk-51425482')
    expect(article.title).toEqual('Storm Ciara to bring severe gales to UK')
    expect(article.url).toEqual('https://www.bbc.co.uk/news/uk-51425482')
    expect(article).toBe(new Article)
  })()

})(this)