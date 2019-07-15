console.log("News Story Test:");

(function(exports) {

  console.log("Constructor")

    function test1() {
      describe("Should make an instance of NewsStory")
      var newsStory = new NewsStory();
      assert.isInstanceOf(NewsStory, newsStory);
    };

    function test2() {
      describe("Should store a headline as a property")
      var newsStory = new NewsStory("Many Dogs")
      assert.isEqual("Many Dogs", newsStory.headline);
    }

    function test3() {
      describe("Should store a originURL as a property")
      var newsStory = new NewsStory("Many Dogs", "www.google.com")
      assert.isEqual("www.google.com", newsStory.originURL);
    }

    function test4() {
      describe("Should store an id as a property")
      var newsStory = new NewsStory("Many Dogs", "www.google.com", 1)
      assert.isEqual(1, newsStory.id);
    }

    test1();
    test2();
    test3();
    test4();
})(this);
