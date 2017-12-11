// mock objects here:

function ListDouble() {}
ListDouble.prototype.addPost = function (argument) {};

function ViewDouble(listDouble) {}
ViewDouble.prototype.render = function () {
  return '<ul><li><div>Big Headline: news post</div></li><li><div>Favourite show: sitcom</div></li></ul>';
};

// describe tests here:

function insertsHTMLIntoDiv() {
  var describe = 'controller inserts html into div element';
  var controller = new Controller(new ListDouble, ViewDouble);
  controller.insertHTML();
  var div = document.getElementById('app').innerHTML;
  var HTMLstring = '<ul><li><div>Big Headline: news post</div></li><li><div>Favourite show: sitcom</div></li></ul>';
  assert.isEqual(describe, div, HTMLstring);
}


// call functions here:

insertsHTMLIntoDiv()
