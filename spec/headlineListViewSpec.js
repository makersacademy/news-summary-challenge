"use strict";

(function testHeadlineListViewReturnsAStringOfHTMLWithClickableLink() {
    var apiCallDouble = {'response': {'results': [{'webTitle': "World Cup Fever", 'webUrl': 'www.test1.co.uk', 'fields': {'thumbnail': 'www.testimage.co.uk'}}, {'webTitle': "Russia draws football fans in wave of tourism", 'webUrl': 'www.test2.co.uk', 'fields': {'thumbnail': 'www.testimage2.co.uk'}}]}}
    var headlineList = new HeadlineList();
    headlineList.addHeadlines(apiCallDouble);
    var headlineListView = new HeadlineListView(headlineList);
    var expectedHTML = `<ul><li><div><a href='#www.test1.co.uk'>World Cup Fever<div><img src='www.testimage.co.uk'></div></a></div></li><br><li><div><a href='#www.test2.co.uk'>Russia draws football fans in wave of tourism<div><img src='www.testimage2.co.uk'></div></a></div></li><br></ul>`;
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
