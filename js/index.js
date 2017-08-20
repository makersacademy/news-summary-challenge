(function() {
  var request = new XMLHttpRequest();
  var element = document.getElementById('app');
  var articleCollection = new ArticleCollection(Article);
  var headlineParser = new HeadlineParser(articleCollection);
  var headlineView = new HeadlineView(headlineParser);
  var guardianController = new GuardianController(element,
                                                  articleCollection,
                                                  headlineView,
                                                  headlineParser,
                                                  request);
  guardianController.setupAPIListener();
  guardianController.fakeAPIRequest();
  // guardianController.makeAPIRequest();
})();
