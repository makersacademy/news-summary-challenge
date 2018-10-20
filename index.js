var newsManager
window.addEventListener("hashchange", ViewController.showSelectedView)

APIQuery(function (json) {
  newsManager = new NewsManager(json)  
  ViewController.showSelectedView()
})
