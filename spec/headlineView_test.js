function testHeadlineView() {
  api = new APIHeadline()
  api.data = APITestOutput()
  api.getHeadlines()
  view = new View(api)
  assert.isTrue('returns html list of headlines',
    view.headlinesToHTML() === '<ul><li><div><a href="#0">Headline 1</div></li><li><div><a href="#1">Headline 2</div></li></ul>')
}
testHeadlineView()
