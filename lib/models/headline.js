(function(exports) {  
  function Headline(text) {
    this._text = text;
  };

  Headline.prototype.getText = function() {
    return this._text;
  };

  exports.Headline = Headline;
})(this);