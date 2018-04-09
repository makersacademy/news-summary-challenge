function getNews() {
  let url = "https://content.guardianapis.com/uk?show-editors-picks=true&api-key=test"

  let headlineRequest = new headlineGrabber();

  headlineRequest.makeRequest(url)
    .then(function(headline) {
      headlineMaker = new headlineMaker(headline)
      headlineMaker.printHeadlines();
    })
};
