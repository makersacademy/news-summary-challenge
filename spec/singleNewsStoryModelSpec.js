// "use strict";
//
// (function testSingleNewsStoryModelCanAccessFullArticle() {
//   function XMLHttpRequestDouble() {};
//
//   XMLHttpRequestDouble.prototype = {
//     open: function() {},
//     send: function() {},
//     responseText: function() {
//       return "Test Article"
//     }
//   }
//   var headlineDouble = {"response": {"results": [{"apiURL": "test-URL"}]}}
//   var singleNewsStory = new SingleNewsStory(headlineDouble)
//   console.log(singleNewsStory)
//   var httpRequest = new XMLHttpRequestDouble();
//   // httpRequest.responseText = function stubResponseTextReturn() {
//   //   return "Test Article"
//   // }
//   var expectedText = "Test Article"
//   singleNewsStory.storyText();
//   console.log(singleNewsStory.body)
//   assert.isTrue(singleNewsStory.body === expectedText);
//   console.log("Test for: Single News Story Model can access a full article PASSED")
// })();
