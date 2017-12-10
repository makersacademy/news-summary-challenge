(function(exports) {

  function Controller(contentDiv, articleList, xhttp) {
    this._contentDiv = contentDiv;
    this._articleList = articleList;
    this._xhttp = xhttp;
  };

  Controller.prototype = {

    _setMainView: function() {
      this.getContentDiv().innerHTML = this.getHeaderView().getHeaderHTML();
    }

  };

  exports.Controller = Controller

})(this);
