// on load, set up the controller, get data for headlines, show headline view
'use strict';
window.addEventListener('onclick', function(){
    var news = new newsArticleList()

    var controller = new NewsController(news)
    controller.renderPage()

})