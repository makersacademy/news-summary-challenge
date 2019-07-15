console.log("News Story List View Tests:");

(function(exports) {

  console.log("Constructor:")

    function test1() {
      describe("takes a newsStoryList upon instantiation and stores it as a property")

      function MockNewsStoryList() {
        listOfStories: [{headline: "Hello" , originURL: "www.google.com" , id: 1}]
      };

      var mockNewsStoryList = new MockNewsStoryList;
      var newsStoryListView = new NewsStoryListView(mockNewsStoryList);
      assert.isInstanceOf(MockNewsStoryList, newsStoryListView.newsStoryList)
    }

    console.log("#displayNewsStoryList")

    function test2() {
      describe("returns the headlines of any NewsStorys as a link in the NewsStoryList")

      function MockNewsStoryList() {
        this.listOfStories = [{headline: "Hello" , originURL: "http://www.google.com" , id: 1}]
      };

      var mockNewsStoryList = new MockNewsStoryList;
      var newsStoryListView = new NewsStoryListView(mockNewsStoryList);
      assert.includes("<div><h2><a href=http://www.google.com>Hello</a></h2></div>", newsStoryListView.displayNewsStoryList())
    }

    function test3() {
      describe("returns all headlines as links for the NewsStoryList")
      function MockNewsStoryList() {
        this.listOfStories = [
                              {headline: "Hello" , originURL: "http://www.google.com" , id: 1},
                              {headline: "Goodbye" , originURL: "http://www.twitter.com" , id: 2},
                            ]
      };
      var mockNewsStoryList = new MockNewsStoryList;
      var newsStoryListView = new NewsStoryListView(mockNewsStoryList);
      assert.includes(newsStoryListView.displayNewsStoryList(), "<div><h2><a href=http://www.twitter.com>Goodbye</a></h2></div>")
    }

    test1();
    test2();
    test3();

})(this);
