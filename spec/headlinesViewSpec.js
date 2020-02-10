(function(exports) {
  function DoubleNewsList() {
    this.list = [ {
      headline: "Headline 1",
      id: 0,
      image: 'image'
    }]
  }

  DoubleNewsList.prototype.viewAll = function() {
    return this.list
  }

  var newsList = new DoubleNewsList()
  var headlinesView = new HeadlinesView(newsList)

  function displayHeadlines() {
    console.log('displayHeadlines')
    expect(headlinesView.displayHeadlines()).toEqual("<ul><div id='article'><img src=image><br><a href='#articles/0'>Headline 1</a></div></ul>")
  }

  function displaysNothingToSeeHere() {
    console.log('displaysNothingToSeeHere')
    newsList.list.splice(0)
    expect(headlinesView.displayHeadlines()).toEqual('Nothing to see here...')
  }

  displayHeadlines()
  displaysNothingToSeeHere()
})(this)