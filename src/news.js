let news = []

getNews = function() {
  const xhttp = new XMLHttpRequest()

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.responseText).response.results
      
      response.forEach(element => {
        let title = element.webTitle

        getContent(element).then((val) => {
          let art = {
            newsTitle: title,
            newsContent: val
          }

          news.push(art)

          printContent(art)
        })
      })
    }
  }

  xhttp.open("GET", "http://content.guardianapis.com/search?q=football&api-key=XXX", true)
  xhttp.send()
}

getContent = function(response) {
  const xhttp = new XMLHttpRequest()
  
  const prom = new Promise(function(resolve, reject) {
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(this.responseText).response.content.fields.body)
      }
    }
  })
  
  xhttp.open("GET", response.apiUrl + "?show-fields=body&api-key=XXX", true)
  xhttp.send()

  return prom.then((content) => {
    return content
  })
}

printContent = function(art) {
  article = document.createElement("article")

  title = document.createElement("H2")
  title.innerHTML = art.newsTitle
  title = article.appendChild(title)

  content = document.createElement("DIV")
  content.innerHTML = art.newsContent.slice(0, 555)
  content = article.appendChild(content)

  fullContentButton = document.createElement("button")
  fullContentButton.innerHTML = 'Read full news!'
  fullContentButton = article.appendChild(fullContentButton)
  fullContentButton.setAttribute("onclick", "displayFullContent(" + (news.length -1) + ")")

  document.getElementById("news").appendChild(article)
}

displayFullContent = function(index) {
  let art = news[index]

  document.getElementById("news").style.display = 'none'

  fullContent = document.createElement("article")
  fullContent.innerHTML = art.newsContent

  document.getElementById("full-news").appendChild(fullContent)
}

getNews()
