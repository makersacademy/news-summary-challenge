var fakeBody = {innerHTML: ""}
var fakeDocument = {body: fakeBody, querySelector: 'somenotelistlines'}

var newsView = new NewsView(fakeDocument)

newsView.renderStructure()

describe('it renders structure', 
  expect(fakeBody.innerHTML).contains(`firstPage`)
)