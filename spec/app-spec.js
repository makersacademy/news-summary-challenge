(function() {

  (function() {
    var description = "NewsApp.displayHeadlines displays the headlines"

    var mockApiInterface = {
      getHeadlines: function() {
        return [
          { headline: "First headline" },
          { headline: "Second headline" },
          { headline: "Third headline" }
        ]
      }
    }
    var newsApp = new NewsApp(mockApiInterface)

    newsApp.displayHeadlines()
    app = document.getElementById('app')

  })()

})()
