
(function(exports){
  var Snippet = function(obj) {
    this.obj = obj;
  };
  Snippet.prototype.toHtml = function() {
    return '<ul>' +
  String(this.obj["response"]["results"].map(item => '<div><li><a href="'
   + item["webUrl"] +'">' + item["webTitle"] + '</a></li></div>')).replace(/,/g, "")
  + '</ul>'
};
exports.Snippet = Snippet;
})(this);
