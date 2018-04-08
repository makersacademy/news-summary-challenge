(function(exports) {
  function View(headlineList) {
    this._list = headlineList;
  };

  View.prototype.render = function () {
    output = ['<ul>'];

    this._list.get().forEach(function(headlineModel) {
      output.push("<li><div>" + headlineModel.get() + "</div></li>")
    });

    output.push('</ul>');
    return output.join('');
};

  exports.View = View;
})(this);
