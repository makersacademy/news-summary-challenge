'use strict';

(function(exports) {

function NewsPaperView(newspaper) {
  this._newspaper = newspaper
};

NewsPaperView.prototype.returnHTML = function() {
  var HTMLArray = this._newspaper._articleList.map(article => article._id
  + ">" + article._headline)
  return "<ul><li><div><a href=#" + HTMLArray.join
  ("</a></div></li><li><div><a href=#") + "</a></div></li></ul>"
};

exports.NewsPaperView = NewsPaperView;
})(this);


