window.onload = function () {
  (function () {
    var httpRequest
    var newsItems
    var currentUrl
    //var newsUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk?show-editors-picks=true&order-by=newest&show-fields=all'
    var newsUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail'
    // document.getElementById("ajaxButton").addEventListener('click', makeRequest(newsUrl))

    function makeRequest (url) {
      currentUrl = url
      httpRequest = new XMLHttpRequest()

      if (!httpRequest) {
        alert('Cannot create httpRequest instance')
        return false
      }
      httpRequest.onreadystatechange = httpResponse
      httpRequest.open('GET', url)
      httpRequest.send()
    }

    function httpResponse () {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          if (currentUrl === newsUrl) {
            newsItems = JSON.parse(httpRequest.responseText)
            processGuardianJson(newsItems)
          }
        } else {
          alert('There was a problem with the request.')
        }
      }
    }

    function processGuardianJson (responseContents) {
      console.log(responseContents)
      for (let newsHeadline of responseContents.response.results) {
        let newsItemThumbnail = new Image(250, 150)
        newsItemThumbnail.src = newsHeadline.fields.thumbnail
        let newsItemTitle = document.createTextNode(newsHeadline.webTitle)
        let section = document.createElement('section')
        let paragraph = document.createElement('p')
        section.appendChild(newsItemThumbnail)
        paragraph.appendChild(newsItemTitle)
        section.appendChild(paragraph)
        document.getElementById("news_summary").appendChild(section)
      }
    }
    makeRequest(newsUrl)
  })()
}
