function Headline(text) {
  this._text = text;
};

Headline.prototype.getText = function() {
  return this._text;
};