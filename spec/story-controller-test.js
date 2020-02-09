(function TestControllerInitiation() {
  var controller = new Controller()

  assert.isTrue(controller.view instanceof View)
  assert.isTrue(controller.list instanceof List)
})();

(function TestControllerAddsStory() {
  var controller = new Controller()
  controller.addStory("Hi")

  assert.isTrue(controller.list.array[0].text === "Hi")
})();

(function TestControllerInputsArray() {
  var controller = new Controller()
  controller.addStory("Hi")

  assert.isTrue(controller.list.array.length === 1)
  assert.isTrue(controller.list.array[0].text === "Hi")
})();

(function TestControllerCreatesString() {
  var controller = new Controller()
  controller.addStory("Hi")

  assert.isTrue(controller.createString() === "<ul><li><div><a href='#0'>Hi</a></div></li></ul>")
})();

(function TestControllerPrintsString() {
  var controller = new Controller()
  controller.addStory("Test")

  var element = document.createElement('div');
  element.setAttribute('id', 'app');
  controller.printDiv();

  assert.isTrue(document.getElementById('app').innerHTML.includes("Test"))
})();

(function TestControllerMocksDocument() {
  var fakeDiv = {
    innerHTML: ""
  }
  
  var fakeDocument = {
    getElementById: function() {
      return fakeDiv
    }
  }

  var controller = new Controller(fakeDocument)
  controller.addStory("Test")
  controller.printDiv()

  var element = document.createElement('div');
  element.setAttribute('id', 'app');
  controller.printDiv();

  assert.isTrue(document.getElementById('app').innerHTML.includes("Test"))
})();

(function TestAPIRequest() {
  var controller = new Controller()
  controller.getArticle()
})();
