'use strict';

(function(exports) {
  function View(list) {
    this.list = list
  }

  View.prototype.createString = function() {
    var string = "<ul>"
    this.list.array.forEach(function(element) {
      string += "<li><div><a href='#" + element.id + "'>" + element.text.slice(0, 20) + "</a></div></li>"
    })
    string += "</ul>"
    return string
  }
  
  exports.View = View
})(this);
