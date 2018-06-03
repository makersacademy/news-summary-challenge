window.onload = function () {
  (function () {
    var httpRequest
    var responseReceivedFromServer
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
          responseReceivedFromServer = JSON.parse(httpRequest.responseText)
          console.log(responseReceivedFromServer)
          if (currentUrl === newsUrl) {
            processGuardianJson(responseReceivedFromServer)
          } else {
            console.log(responseReceivedFromServer)
          }
        } else {
          alert('There was a problem with the request.')
        }
      }
    }

    function summarise () {
      var url = getUrlFromHash()
      console.log(url)
      // currentUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + url
      // makeRequest(currentUrl)
    }

    function makeUrlChangeShowAnimalForCurrentPage() {
      window.addEventListener("hashchange", console.log("hash changed"), false)
    }

    function getUrlFromHash() {
      return window.location.hash.split("#")[1]
    }

    function processGuardianJson (responseContents) {
      for (let newsHeadline of responseContents.response.results) {
        let newsItemThumbnail = new Image(250, 150)
        let section = document.createElement('section')
        let paragraphLinks = document.createElement('p')
        let paragraphNews = document.createElement('p')
        let linkButton = document.createElement('a')
        linkButton.setAttribute('href', `${newsHeadline.webUrl}`)
        linkButton.innerHTML = "See Full Article"
        let summaryButton = document.createElement('a')
        summaryButton.setAttribute('href', `#${newsHeadline.webUrl}`)
        summaryButton.setAttribute('class', 'summary_link')
        summaryButton.innerHTML = "See Summary"
        let newsItemTitle = document.createTextNode(newsHeadline.webTitle)
        newsItemThumbnail.src = newsHeadline.fields.thumbnail
        section.appendChild(newsItemThumbnail)
        paragraphLinks.appendChild(linkButton)
        paragraphLinks.appendChild(summaryButton)
        paragraphNews.appendChild(newsItemTitle)
        section.appendChild(paragraphLinks)
        section.appendChild(paragraphNews)
        document.getElementById("news_summary").appendChild(section)
      }
    }
    makeRequest(newsUrl)
    makeUrlChangeShowAnimalForCurrentPage()
  })()

}
