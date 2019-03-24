// on load, set up the controller, get data for headlines, show headline view
'use strict';
window.addEventListener('load', function(){
    var news = new NewsArticleList()

    setTimeout(function() {
        var controller = new NewsController(news)
        controller.renderPage()
    }, 100)

})