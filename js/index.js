(function() {
  var request = new XMLHttpRequest();
  var element = document.getElementById('app');
  var headlineParser = new HeadlineParser()
  var headlineView = new HeadlineView(headlineParser)
  var guardianController = new GuardianController(element, headlineView, headlineParser, request);
  guardianController.setupAPIListener();
  guardianController.fakeAPIRequest();
  // guardianController.makeAPIRequest();
})();
