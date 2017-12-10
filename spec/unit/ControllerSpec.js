"use strict";

(function() {

  var controller
  var fakeContentDiv = {}
  var fakeHeadlinelist = {}

  controller = new Controller(fakeContentDiv, fakeHeadlinelist)

  runner.register(function testNewController() {
    return assert.isTrue(controller instanceof Controller)
  })

  runner.register(function testControllerGetContentDiv() {
    return assert.returns(controller.getContentDiv(), fakeContentDiv)
  })

  runner.register(function testControllerGetHeadlineList() {
    return assert.returns(controller.getHeadlineList(), fakeHeadlinelist)
  })

})()
