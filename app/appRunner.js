window.addEventListener('load',function(){

  // Your app will grab all the headlines from the Guardian newspaper API and display them on a page. Clicking on a headline will show a summary of the article.

  // get a list of headlines (all news summary) - NewsSummaryModel, NewsSummaryView
  // click on one to get individual summary -  NewsArticleModel, NewsArticleView



  var controller = new NewsController()
  controller.updateDOM()


})