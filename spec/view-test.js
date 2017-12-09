
// mock objects here:

function postDouble (headline, text, id) {
  this._headline = headline;
  this._id = id;
  this._text = text;
}
postDouble.prototype = {
  text: function () {
    return this._text;
  },
  headline: function () {
    return this._headline;
  }
};

function listDouble (array) {
  this._list = array;
}
listDouble.prototype.list = function () {
  return this._list;
};



// describe tests here:

function viewObjectExists () {
  var describe = 'ListView: object exists';
  var view = new View ();
  assert.isTrue(describe, view instanceof View);
}

function returnsHtmlHeader() {
  var describe = 'returns headline as HTML href string';
  view = new View(listDouble);
  htmlString = '<ul><li><div><a href="#headlines/header1">new post</a></div></li>';
  assert.isEqual(describe, view.renderHtml(), htmlString);
}

// call functions here:

viewObjectExists();
returnsHtmlHeader();
