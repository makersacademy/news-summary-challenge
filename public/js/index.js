window.onload = function () {
  (function () {
    var httpRequest
    var responseReceivedFromServer
    var currentUrl
    var newsUrl = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail'
    var newsTitles = []
    var titleIndex
    var imageSources = []

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
          if (currentUrl === newsUrl) {
            processGuardianJson(responseReceivedFromServer)
          } else {
            processAylienJson(responseReceivedFromServer)
          }
        } else {
          alert('There was a problem with the request.')
        }
      }
    }

    function summarise () {
      var url = getUrlFromHash()
      currentUrl = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=' + url
      makeRequest(currentUrl)
    }

    function makeUrlChangeShowAbstractForCurrentPage() {
      window.addEventListener("hashchange", summarise, false)
    }

    function getUrlFromHash() {
      let url = window.location.hash.split("#")[1].split("&")[0]
      titleIndex = window.location.hash.split("#")[1].split("&")[1]
      return url
    }

    function processAylienJson(responseContents) {
      document.getElementById('page_title').innerHTML = 'Article Summary'

      document.getElementById('news_headlines').hidden = true
      document.getElementById('news_item_summary').hidden = false
      document.getElementById('news_item_summary').innerText = ''
      let newsItemThumbnail = new Image(250, 150)
      newsItemThumbnail.src = imageSources[titleIndex]
      document.getElementById('news_item_summary').appendChild(newsItemThumbnail)
      let headline = document.createTextNode(newsTitles[titleIndex])
      let heading = document.createElement('h2')
      heading.appendChild(headline)
      document.getElementById('news_item_summary').appendChild(heading)
      let backButton = document.createElement('button')
      backButton.setAttribute('id', 'back_button')
      backButton.innerHTML = 'Back to Headlines'
      for (let sentence of responseContents.sentences) {
        let paragraph = document.createElement('p')
        let textNode = document.createTextNode(sentence)
        paragraph.appendChild(textNode)
        document.getElementById('news_item_summary').appendChild(paragraph)
      }
      document.getElementById('news_item_summary').appendChild(backButton)
      document.getElementById('back_button').addEventListener('click', function() {
        makeRequest(newsUrl)
      })
    }

    function processGuardianJson (responseContents) {
      document.getElementById('news_headlines').hidden = false
      document.getElementById('news_item_summary').hidden = true
      document.getElementById('page_title').innerHTML = 'Headlines'
      for (let newsHeadline of responseContents.response.results) {
        newsTitles.push(newsHeadline.webTitle)
        let newsItemThumbnail = new Image(250, 150)
        try {
          newsItemThumbnail.src = newsHeadline.fields.thumbnail
        } catch (_) {
          newsItemThumbnail.src = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"
          newsItemThumbnail.alt = 'No image provided'
        }
        imageSources.push(newsItemThumbnail.src)
        let section = document.createElement('section')
        let paragraphLinks = document.createElement('p')
        let paragraphNews = document.createElement('p')
        let linkButton = document.createElement('a')
        let horizontalLine = document.createElement('hr')
        linkButton.setAttribute('class', 'paragraph_links')
        linkButton.setAttribute('href', `${newsHeadline.webUrl}`)
        linkButton.innerHTML = "Full Article"
        let summaryButton = document.createElement('a')
        summaryButton.setAttribute('href', `#${newsHeadline.webUrl}&${responseContents.response.results.indexOf(newsHeadline)}`)
        summaryButton.setAttribute('class', 'paragraph_links')
        summaryButton.innerHTML = "Summary"
        var newsItemTitle = document.createTextNode(newsHeadline.webTitle)
        section.appendChild(newsItemThumbnail)
        paragraphLinks.appendChild(linkButton)
        paragraphLinks.appendChild(summaryButton)
        paragraphNews.appendChild(newsItemTitle)
        section.appendChild(paragraphLinks)
        section.appendChild(paragraphNews)
        section.appendChild(horizontalLine)
        document.getElementById("news_headlines").appendChild(section)
      }
    }
    makeRequest(newsUrl)
    makeUrlChangeShowAbstractForCurrentPage()
  })()

}
