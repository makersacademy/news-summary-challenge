function testHeadlineView() {
  api = new APIHeadline()
  api.data = APITestOutput()
  api.getHeadlines()
  view = new View(api)
  console.log(view.headlinesToHTML())
  assert.isTrue('returns html list of headlines',
    view.headlinesToHTML() === "<ul><li><div>Headline 1</div></li><li><div>Headline 2</div></li></ul>")
}
testHeadlineView()