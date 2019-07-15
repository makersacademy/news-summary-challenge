console.log("JSON Converter");

(function(exports) {

  console.log("Constructor")

    function test1() {
      describe("Should make an instance of JSONConverter")
      var jsonConverter = new JSONConverter();
      assert.isInstanceOf(JSONConverter, jsonConverter);
    };

  console.log("#convertHashToNewsStoryObject")

    function test2() {
      describe("take a hash and turn it into a NewsStory")
      var jsonConverter = new JSONConverter();
      var mockJSONData = {id: 1, webTitle: "Google Home Page", webUrl: "www.google.com"}
      assert.isInstanceOf(NewsStory, jsonConverter.convertHashToNewsStoryObject(mockJSONData))
    };

    function test3() {
      describe("stores the JSONdata's webTitle value as the NewsStory's headline property")
      var jsonConverter = new JSONConverter();
      var mockJSONData = {id: 1, webTitle: "Google Home Page", webUrl: "www.google.com"}
      var newNewsStory = jsonConverter.convertHashToNewsStoryObject(mockJSONData)
      assert.isEqual("Google Home Page", newNewsStory.headline)
    };

    function test4() {
      describe("stores the JSONdata's webUrl value as the NewsStory's originURL property")
      var jsonConverter = new JSONConverter();
      var mockJSONData = {id: 1, webTitle: "Google Home Page", webUrl: "www.google.com"}
      var newNewsStory = jsonConverter.convertHashToNewsStoryObject(mockJSONData)
      assert.isEqual("www.google.com", newNewsStory.originURL)
    };

    function test5() {
      describe("stores the JSONdata's id value as the NoteStory's id property")
      var jsonConverter = new JSONConverter();
      var mockJSONData = {id: 1, webTitle: "Google Home Page", webUrl: "www.google.com"}
      var newNewsStory = jsonConverter.convertHashToNewsStoryObject(mockJSONData)
      assert.isEqual(1, newNewsStory.id)
    };


    test1();
    test2();
    test3();
    test4();
    test5();

})(this);
