(function() {
  var request = new XMLHttpRequest();
  var element = document.getElementById('app');
  var articleCollection = new ArticleList(ArticleModel);
  var headlineParser = new HeadlineParser(articleCollection);
  var headlineView = new HeadlineView(headlineParser);
  var guardianController = new GuardianController(window,element,articleCollection,headlineView,headlineParser,request);
  var requestConstructor = XMLHttpRequest;
  // var articleView = new ArticleView();
  guardianController.APIListener();
  guardianController.HashListener();
  guardianController.APIRequest();
})();
