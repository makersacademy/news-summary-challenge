var testSuite = function() {
  console.log("NEWS SINGLE PAGE APP TESTS");
  describe("NewsController", function() {

    it("should update the DOM element", function() {
      var newsController = new NewsController()
      var elementDouble = mock.makeDouble("controller double")
      newsController.updateInnerHtml(elementDouble, "some text")
      assert.equal(elementDouble.innerHTML,"some text")
    });
  });

  describe("NewsStory", function() {

    it("should know it's headline", function() {
      var newsStory = new NewsStory("This is a headline!")
      assert.equal(newsStory.headline,"This is a headline!")
    });
  });

  describe("NewsView", function() {

    it("should store an array of news stories", function() {
      var story1 = mock.makeDouble("Story 1")
      var story2 = mock.makeDouble("Story 2")
      var stories = [story1, story2]
      var newsView = new NewsView(stories)
      assert.equal(newsView.stories.length,2)
    });

    it("render all headlines in a very basic string", function() {
      var story1 = mock.makeDouble("Story 1")
      var story2 = mock.makeDouble("Story 2")
      story1.headline = "Here's a headline!"
      story2.headline = "Here's another headline!"
      var stories = [story1, story2]
      var newsView = new NewsView(stories)
      assert.equal(newsView.render(),"Here's a headline! Here's another headline!")
    });
  });
}

testSuite();