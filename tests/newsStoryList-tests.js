console.log("News Story List Test:");

(function(exports) {

  console.log("Constructor")

    function test1() {
      describe("Should make an instance of NewsStoryList")
      var newsStoryList = new NewsStoryList();
      assert.isInstanceOf(NewsStoryList, newsStoryList);
    };

    function test2() {
      describe("Has a listOfstories property equal to an empty array")
      var newsStoryList = new NewsStoryList()
      assert.isInstanceOf(Array, newsStoryList.listOfStories)
      assert.isEqual(0, newsStoryList.listOfStories.length);
    };

  console.log("addToList")

    function test3() {
      describe("Should add an element to the listOfStories")
      var newsStoryList = new NewsStoryList()
      var mockJSONData = [{id: 1, webTitle: "Google Home Page", webUrl: "www.google.com"}]
      newsStoryList.addToList(mockJSONData)
      assert.isEqual(1, newsStoryList.listOfStories.length);
    };

    function test3() {
      describe("Adds a instance of NewsStory to the listOfStories via conversion of a JSON")
      var newsStoryList = new NewsStoryList()
      var mockJSONData = [{id: 1, webTitle: "Google Home Page", webUrl: "www.google.com"}]
      newsStoryList.addToList(mockJSONData)
      assert.isInstanceOf(NewsStory, newsStoryList.listOfStories[0])
    };


    test1();
    test2();
    test3();

})(this);
