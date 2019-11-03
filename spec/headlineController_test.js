function testHeadlineController() {
  let elementDouble = {
    innerHTML: "old headline"
  }

  let documentDouble = {
    getElementById: function() {
      return elementDouble;
    }
  }

  var api = new APIHeadline()
  api.data = APITestOutput()
  api.getHeadlines()
  view = new View(api)
  headlineController = new headlineController(view)
  assert.isTrue('Inserts HTML on page',
    headlineController.insertHTML(documentDouble) === '<ul><li><div>Headline 1</div></li><li><div>Headline 2</div></li></ul>')
}
testHeadlineController()