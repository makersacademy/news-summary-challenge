// on load, set up the controller, get data for headlines, show headline view
'use strict';
window.addEventListener('load', function(){
    console.log("i")
    var news = new NewsArticleList()
    news.getData()
    .then( function() {
        console.log("iii")
        var controller = new NewsController(news)
        controller.renderPage()
        controller.listen()
    })
    console.log("ii")
})