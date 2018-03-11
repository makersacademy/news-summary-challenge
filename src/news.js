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

        getSummary(element).then((val) => {
          console.log(val)
          return val
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

getSummary = function(response) {
  // Aylien has stronger security than The Guardian (open cross-domain?)
  // Browser cannot do a request to another server through http-server
  const xhttp = new XMLHttpRequest()

  // Max requests exceeded...
  // xhttp.open("GET", "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + response.webUrl, true)
  xhttp.open("GET", "https://api.aylien.com/api/v1/summarize?url=" + response.webUrl, true)
  
  xhttp.setRequestHeader("X-AYLIEN-TextAPI-Application-ID", "8c1a5ae3")
  xhttp.setRequestHeader("X-AYLIEN-TextAPI-Application-Key", "6bcb387c52e9569bdfe2e787cf155fb6")
  
  const prom = new Promise(function(resolve, reject) {
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(this.responseText).text)
      }
    }
    xhttp.send()
  })

  return prom.then((summary) => {
    return summary
  })
}

printContent = function(art) {
  article = document.createElement("article")
  // Vamos redefiniendo el title y content
  title = document.createElement("H2")
  title.innerHTML = art.newsTitle
  title = article.appendChild(title)

  content = document.createElement("DIV")
  content.innerHTML = art.newsContent
  content = article.appendChild(content)

  document.getElementById("news").appendChild(article)
}

getNews()
