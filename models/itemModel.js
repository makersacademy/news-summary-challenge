'use strict';

(function(exports) {
  function Item(title, description, image) {
    this._title = title;
    this._desc = description;
    this._img = image;
  };

  Item.prototype.title = function() {
    return this._title;
  };

  Item.prototype.desc = function() {
    return this._desc;
  };

  Item.prototype.img = function() {
    return this._img;
  };

  exports.Item = Item;
})(this);
