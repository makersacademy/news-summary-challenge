"use strict";

(function testHeadlineListViewReturnsAStringOfHTMLWithClickableLink() {
    var APIDouble = {'results': [{'webTitle': "World Cup Fever"}, {'webTitle': "Russia draws football fans in wave of tourism"}]}
    var headlineList = new HeadlineList();
    headlineList.addHeadlines(APIDouble);
    var headlineListView = new HeadlineListView(headlineList);
    var expectedHTML = `<ul><li><div><a href="#0">World Cup Fever</a></div></li><li><div><a href="#1">Russia draws football fans in wave of tourism</a></div></li></ul>`
    assert.isTrue(headlineListView.returnHeadlineHTML() === expectedHTML);
    console.log("Test for: Headline List View generates headline HTML string PASSED");
  })();
