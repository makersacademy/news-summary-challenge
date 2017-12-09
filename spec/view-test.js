
// mock objects here:

function PostDouble (headline, text, id) {
  this._headline = headline;
  this._text = text;
  this._id = id;
}
PostDouble.prototype = {
  text: function () { return this._text; },
  headline: function () { return this._headline; },
  id: function () { return this._id; }
};

function ListDouble (array) {
this._list = array;
}
ListDouble.prototype.list = function () {
  return this._list;
};


// describe tests here:

function viewObjectExists() {
  var describe = 'ListView: object exists';
  var view = new View ();
  assert.isTrue(describe, view instanceof View);
}

function returnsEmptyHtmlHeader() {
  var describe = 'returns empty headline as HTML';
  list = new ListDouble ([]);
  view = new View(list);
  html = '<ul></ul>';
  assert.isEqual(describe, view.renderHtml(), html);
}
function returnsHtmlHeader() {
  var describe = 'returns headline as HTML href string';
  list = new ListDouble ([ new PostDouble('headline', 'text', 'id') ]);
  view = new View(list);
  html = '<ul><li><div><a href="#headlines/headline">text</a></div></li></ul>';
  assert.isEqual(describe, view.renderHtml(), html);
}

// call functions here:

viewObjectExists();
returnsEmptyHtmlHeader()
returnsHtmlHeader();
