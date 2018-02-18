'use strict';

(function (exports) {
  function ImageView(image) {
    this.image = image
  }

  ImageView.prototype.parse = function () {
    return `<img src="${this.image}">`
  }

  exports.ImageView = ImageView
})(this);
