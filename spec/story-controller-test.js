(function TestControllerInitiation() {
  var controller = new Controller()

  assert.isTrue(controller.view instanceof View)
  assert.isTrue(controller.story instanceof Story)
})();

