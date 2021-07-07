"use strict";
(function(exports){
  var newsHeadlinesListDouble = {
    headlines: [{
      id: 0,
      webTitle: "First web title",
      apiUrl: "First api Url"
    },
    {
      id: 1,
      webTitle: "Second web title",
      apiUrl: "Second api Url"
    }],
    getHeadlines: function(){
      return this.headlines
    }
  }
  function testThatTheHTMLCreatedForAListOf2HeadlinesIsCorrect(){
    var headlinesListView = new NewsHeadlinesListView(newsHeadlinesListDouble)
    assert.isTrue(headlinesListView.view() === "<ul><li><div><a href='#headlines/0'>First web title</a></div></li><li><div><a href='#headlines/1'>Second web title</a></div></li></ul>")
  }
  testThatTheHTMLCreatedForAListOf2HeadlinesIsCorrect()
})(this)
