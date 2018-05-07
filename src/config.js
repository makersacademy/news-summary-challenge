(function() {

  var api = new Api()
  var apiRequest = api.request()

  apiRequest.then(function(response){
    var newsController = new NewsController(response)
    newsController.getHTML()
    newsController.urlChangeDisplayNews()
    console.log(response)
  })

})()
