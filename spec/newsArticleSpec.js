(function(exports) {
  var headline = 'Headline'
  var image = 'image.jpg'
  var apiURL = 'apiURL'
  var URL = 'URL'
  var id = 1
  var article = new NewsArticle(headline, image, URL, apiURL, id)

  function viewHeadline() {
    console.log('viewHeadline')
    expect(article.viewHeadline()).toEqual(headline)
  }

  function viewApiURL() {
    console.log('viewApiURL')
    expect(article.viewApiURL()).toEqual(apiURL)
  }

  function viewImage() {
    console.log('viewImage')
    expect(article.viewImage()).toEqual(image)
  }

  function viewId() {
    console.log('viewId')
    expect(article.viewId()).toEqual(id)
  }

  viewHeadline()
  viewApiURL()
  viewImage()
  viewId()
})(this)
