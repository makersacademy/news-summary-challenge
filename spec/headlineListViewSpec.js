"use strict";

(function testHeadlineListViewReturnsAStringOfHTMLWithClickableLink() {
    var apiCallDouble = {'response': {'results': [{'webTitle': "World Cup Fever"}, {'webTitle': "Russia draws football fans in wave of tourism"}]}}
    var headlineList = new HeadlineList();
    headlineList.addHeadlines(apiCallDouble);
    var headlineListView = new HeadlineListView(headlineList);
    var expectedHTML = `<ul><li><div><a href="#0">World Cup Fever</a></div></li><li><div><a href="#1">Russia draws football fans in wave of tourism</a></div></li></ul>`
    assert.isTrue(headlineListView.returnHeadlineHTML() === expectedHTML);
    console.log("Test for: Headline List View generates headline HTML string for multiple headlines PASSED");
  })();

  (function testHeadlineListViewReturnsAStringOfHTMLWithClickableLink() {
      var apiCallDouble = {'response': {'results': []}}
      var headlineList = new HeadlineList();
      headlineList.addHeadlines(apiCallDouble);
      var headlineListView = new HeadlineListView(headlineList);
      var expectedHTML = `<ul></ul>`
      assert.isTrue(headlineListView.returnHeadlineHTML() === expectedHTML);
      console.log("Test for: Headline List View generates headline HTML string when no headlines available PASSED");
    })();
