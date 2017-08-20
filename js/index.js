(function() {
  var request = new XMLHttpRequest();
  var element = document.getElementById('app');
  var articleCollection = new ArticleCollection(Article);
  var headlineParser = new HeadlineParser(articleCollection);
  var headlineView = new HeadlineView(headlineParser);
  var guardianController = new GuardianController(window,
                                                  element,
                                                  articleCollection,
                                                  headlineView,
                                                  headlineParser,
                                                  request);

  var requestConstructor = XMLHttpRequest;
  var articleView = new ArticleView();
  var aylienController = new AylienController(window,
                                              element,
                                              articleCollection,
                                              articleView,
                                              requestConstructor);
  guardianController.setupAPIListener();
  guardianController.setupHashListener();
  // guardianController.makeAPIRequest();
  guardianController.fakeAPIRequest();
  aylienController.setupHashListener();
})();
