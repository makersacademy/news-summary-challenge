// Stores all of the tests for the newsManager class


spec("NoteManager Spec", [
  test("getArticles requests a list of articles and stores them as Note objects", function() {
    let newsManager = new NewsManager()
    newsManager.getArticles()
  }),

  test("displayArticles displays articles and their images", function(){
    let newsManager = new NewsManager()
    newsManager.getArticles()
    

    newsManager.displayArticles()
  })
])

