"use strict";

(function() {

  var headlineList
  headlineList = new HeadlineList()

  runner.register(function testHeadlineListNew(){
    return assert.isTrue(headlineList instanceof HeadlineList)
  })

  runner.register(function testHeadlineListGetList(){
    return assert.returns(JSON.stringify(headlineList.getList()), "[]")
  })

})()
