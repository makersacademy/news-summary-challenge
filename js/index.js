'use strict';

(function() {
  var request, element, articleCollection, headlineParser;
  var headlineView, guardianController, requestConstructor;
  var aylienController;

  request = new XMLHttpRequest();
  element = document.getElementById('app');
  articleCollection = new ArticleCollection(Article);
  headlineParser = new HeadlineParser(articleCollection);
  headlineView = new HeadlineView(headlineParser);
  guardianController = new GuardianController(window,
                                                  element,
                                                  articleCollection,
                                                  headlineView,
                                                  headlineParser,
                                                  request);

  requestConstructor = XMLHttpRequest;
  articleView = new ArticleView();
  aylienController = new AylienController(window,
                                              element,
                                              articleCollection,
                                              articleView,
                                              requestConstructor);
  guardianController.setupAPIListener();
  guardianController.setupHashListener();
  guardianController.makeAPIRequest();
  aylienController.setupHashListener();
})();
