function ElementDouble() {
}

ElementDouble.prototype = {
  innerHTML: function() {
    return 'string'
  }
}

function DocumentDouble() {
  this.getElementByIdCount = 0;
}

DocumentDouble.prototype = {
  getElementById: function() {
    this.getElementByIdCount++;
    return new ElementDouble();
  }
}

var doc = new DocumentDouble();
var newsController = new NewsController();

describe('NewsController')
  it('Exists upon instantiation')
  assert.exists(newsController)

describe('#GetNewsDivElement')
  it('Grabs the news div html element')
  newsController.GetNewsDivElement(doc);
  assert.areEqual(doc.getElementByIdCount, 1)

describe('#ChangeNewsDivContent')
  it('Changes the content of the news div')
  assert.areEqual(newsController.ChangeNewsDivContent('test', doc), 'test')
