(function(exports) {
  const webActions = {
    fillInForm: function(id, content) {
      this._frameDoc().getElementById(id).value = content;
    },
    clickObject: function(id) {
      this._frameDoc().getElementById(id).click();
    },
    // private
    _frameDoc: function() {
      return document.getElementById("pageUnderTest").contentDocument;
    }
  };
  exports.webActions = webActions;
})(this);
