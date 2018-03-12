Note = function(string) {
  this._text = string;
};

Note.prototype.returnString = function () {
  return this._text;
};
