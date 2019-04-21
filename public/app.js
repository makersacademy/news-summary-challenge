console.log("Welcome from app.js")

// window.addEventListener('load', function() {
//   // missing an articlesList component (with view and model) I think
  
//   // understands the list of articles - and returns html string
//   var articlesView = new ArticlesView([])
//   // understands what an article is - will be created somewhere else so don't need 'new' just yet
//   var articleModel = articleModel
//   // controller listens to submit events (actually responses to api calls?), creates an article, adds it to the list, and then updates the DOM
//   var controller = new articlesController(articleModel, articlesView)
//   // create the app - update the DOM
//   controller.updateDOM()
// })

var request = new XMLHttpRequest()

var apiKey = "Replace with api key from .env"
request.open('GET', `https://content.guardianapis.com/search?q=cycling&api-key=${apiKey}`, true)

request.onload = function() {
  console.log("Response received")
  var data = JSON.parse(this.response)
  
  var html = "<ul>"
  for (var i = 0; i < 10; i++) {
    html += `<li><a href="${
      data.response.results[i].webUrl
    }">${
      data.response.results[i].webTitle
    }</a></li>`
  }
  html += "</ul>"
  document.getElementById("app").innerHTML = html
}

request.send()