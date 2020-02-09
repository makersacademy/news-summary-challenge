(function TestControllerInitiation() {
  var controller = new Controller()

  assert.isTrue(controller.view instanceof View)
  assert.isTrue(controller.story instanceof Story)
})();

(function TestControllerAddsStory() {
  var controller = new Controller()
  controller.addTitle("Hi")

  assert.isTrue(controller.story.title === "Hi")
})();

(function TestControllerCreatesString() {
  var controller = new Controller()
  controller.addTitle("Hi")

  assert.isTrue(controller.createString() === "<ul><li><div><a>Hi</a></div></li></ul>")
})();

(function TestControllerPrintsString() {
  var controller = new Controller()
  controller.addTitle("Test")

  var element = document.createElement('div');
  element.setAttribute('id', 'app');
  controller.printDiv();

  assert.isTrue(document.getElementById('app').innerHTML.includes("Test"))
})();