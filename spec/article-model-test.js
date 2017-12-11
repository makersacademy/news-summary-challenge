describe('Article Model', function () {
  it('each Article has an ID property', function () {
    var article = new Article (1)
    expect(article.id).toEqual(1)
  })

  it('has a getter method for the ID', function () {
    var article = new Article (1)
    expect(article.getId()).toEqual(1)
  })

  it('holds a headline property', function () {
    var article = new Article (1, 'Breaking News')
    expect(article.headline).toEqual('Breaking News')
  })

  it('has a getter method for the headline', function () {
    var article = new Article (1, 'Breaking News')
    expect(article.getHeadline()).toEqual('Breaking News')
  })

  it('holds a Url property', function () {
    var article = new Article (1, 'Breaking News', 'url.com')
    expect(article.url).toEqual('url.com')
  })

  it('has a getter method for the Url', function () {
    var article = new Article (1, 'Breaking News', 'url.com')
    expect(article.getUrl()).toEqual('url.com')
  })

  it('holds a thumbnail URL property', function () {
    var article = new Article (1, 'Breaking News', 'url.com', 'thumbnail.com')
    expect(article.thumbnailUrl).toEqual('thumbnail.com')
  })

  it('has a getter method for the thumbnail Url', function () {
    var article = new Article (1, 'Breaking News', 'url.com', 'thumbnail.com')
    expect(article.getThumbnailUrl()).toEqual('thumbnail.com')
  })

  it('holds an API property', function () {
    var article = new Article (1, 'Breaking News', 'url.com', 'thumbnail.com', 'api.com')
    expect(article.api).toEqual('api.com')
  })

  it('has a getter method for the Api', function () {
    var article = new Article (1, 'Breaking News', 'url.com', 'thumbnail.com', 'api.com')
    expect(article.getApi()).toEqual('api.com')
  })
})
