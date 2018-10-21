var newsManager
window.addEventListener("hashchange", ViewController.showTargetView)

APIQuery(function (json) {
  newsManager = new NewsManager(json)  
  ViewController.showTargetView()
})
