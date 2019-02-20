(function (exports) {
  function GatherData () {
  }

  GatherData.prototype.askTheGuardian = function () {
    var address = 'https://content.guardianapis.com/'
    var parameters = 'search?type=article&page-size=50&show-elements=image&show-fields=thumbnail,headline,body,byline&api-key='
    var myRequest = new XMLHttpRequest()
    myRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        var data = myRequest.response
        var query = JSON.parse(data)
        buildTheArticles(query)
      }
    }
    myRequest.open('GET', address + parameters + apiKey)
    myRequest.send()
  }

  function buildTheArticles (query) {
    var i
    var numberOfResults = query.response.results.length

    var headlines = new Headlines()

    for (i = 0; i < numberOfResults; i++) {
      var paragraphs = document.createElement('html')
      var paragraphOne, paragraphTwo, paragraphThree

      paragraphs.innerHTML = query.response.results[i].fields.body

      if (paragraphs.getElementsByTagName('p')[0] === undefined) { paragraphOne = '' } else { paragraphOne = paragraphs.getElementsByTagName('p')[0].innerHTML }

      if (paragraphs.getElementsByTagName('p')[1] === undefined) { paragraphTwo = '' } else { paragraphTwo = paragraphs.getElementsByTagName('p')[1].innerHTML }

      if (paragraphs.getElementsByTagName('p')[2] === undefined) { paragraphThree = '' } else { paragraphThree = paragraphs.getElementsByTagName('p')[2].innerHTML }

      headlines.addArticle(
        query.response.results[i].fields.thumbnail,
        query.response.results[i].sectionName,
        query.response.results[i].fields.headline,
        query.response.results[i].fields.byline,
        paragraphOne,
        paragraphTwo,
        paragraphThree,
        query.response.results[i].webUrl
      )
    }

    renderThePage(headlines)
  }

  function renderThePage (headlines) {
    var controller = new Controller(headlines)
    controller.html('app')
  }

  exports.GatherData = GatherData
})(this)

var todaysNews = new GatherData()
todaysNews.askTheGuardian()
