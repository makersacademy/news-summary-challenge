"use strict";

(function() {

  var headlineListView
  var fakeHeadlineList = {}

  headlineListView = new HeadlineListView(fakeHeadlineList)

  runner.register(function testNewHeadlineListView() {
    return assert.isTrue(headlineListView instanceof HeadlineListView)
  })

  runner.register(function testHeadlineListViewGetHeadlineList() {
    return assert.returns(headlineListView.getHeadlineList(), fakeHeadlineList)
  })

  

})()
