'use strict';

(function(exports) {

function Article(headline, id) {
  this._headline = headline
  this._id = id 
};

Article.prototype.returnHeadline = function() {
  return this._headline
};

exports.Article = Article
})(this);


// headline
// id
// Date???
// link
// image
