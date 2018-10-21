var newsManager
// this ensures that the current page view is changed according to hash changes.  Logic for 'showTargetView' can be found in viewController.js.
window.addEventListener("hashchange", ViewController.showTargetView)

// sends query to Guardian API to get news object, receives back json object ('newsData') containing information relating to 10 articles which is used to instantiate NewsManager()
APIQuery(function (newsData) {
  newsManager = new NewsManager(newsData)  
  ViewController.showTargetView()
})
