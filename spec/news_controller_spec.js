function DocumentDouble() {
}

DocumentDouble.prototype = {
  getElementById: function() {
    return `<div id="news">Sample news</div>`
  }
}

var doc = new DocumentDouble();
var newsController = new NewsController();

describe('NewsController')
  it('Exists upon instantiation')
  assert.exists(newsController)

describe('#GetNewsDivElement')
  it('Grabs the news div html element')
  assert.areEqual(newsController.GetNewsDivElement(doc), `<div id="news">Sample news</div>`)
