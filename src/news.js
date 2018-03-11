// No usar arrow functions si hace falta el This, no entienden de binds, sino que se definen al crearse

getNews = function() {
  const xhttp = new XMLHttpRequest()

  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      response = JSON.parse(this.responseText).response.results
      
      response.forEach(element => {
        let title = element.webTitle

        // Before defining 'content', we wait for a value to be assigned to getContent(element)
        // therefore we use a promise in getContent

        getContent(element).then((val) => {
          let art = {
            newsTitle: title,
            newsContent: val
          }

          printContent(art)
        })
      })
    }
  }

  // true (or not specified) means async
  xhttp.open("GET", "http://content.guardianapis.com/search?q=football&api-key=62f9f053-2fe0-41fc-ba6b-3daf5317d098", true)
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
  
  xhttp.open("GET", response.apiUrl + "?show-fields=body&api-key=62f9f053-2fe0-41fc-ba6b-3daf5317d098", true)
  xhttp.send()

  // Con el arrow function, al no tener contexto de this, funciona el content en getNews
  // No funcionaría con function(content)...
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
  fullContentButton.setAttribute("onclick", "displayFullContent()")

  document.getElementById("news").appendChild(article)
  
  displayFullContent = function() {
    document.getElementById("news").style.display = 'none'

    // Always loading the last article visible on the HTML, binding problem?
    fullContent = document.createElement("article")
    fullContent.innerHTML = art.newsContent

    document.getElementById("full-news").appendChild(fullContent)
  }
}

getNews()
