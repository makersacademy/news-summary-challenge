(function(exports) {
  function View(list) {
    this._list = list;
  };

  View.prototype.render = function () {
    output = ['<ul>'];

    this._list.get().forEach(function(article) {
      output.push("<li><div><img src =" + article.get().image + "></img></div><div>" + article.get().headline + "</div></li>")
    });

    output.push('</ul>');
    return output.join('');
};

  exports.View = View;
})(this);
