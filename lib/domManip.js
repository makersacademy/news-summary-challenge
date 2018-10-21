"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class DomManip {
  constructor(document) {
    this.document = document;
  }

  createElement(type, id = null, htmlClass = null) {
    let element = this.document.createElement(type);

    if (id) {
      element.setAttribute('id', id);
    }

    if (htmlClass) {
      element.setAttribute('class', htmlClass);
    }

    return element;
  }

  createLinkElement(linkUrl, id = null, htmlClass = null) {
    let element = this.createElement("a", id, htmlClass);
    element.setAttribute('href', linkUrl);
    return element;
  }

  createImgElement(imgUrl, id = null, htmlClass = null) {
    let element = this.createElement("img", id, htmlClass);
    element.setAttribute('src', imgUrl);
    return element;
  }

  addElement(element, parentId) {
    let parentNode = this.getElementById(parentId);
    parentNode.appendChild(element);
  }

  clickHide(id, hideId) {
    this.getElementById(id).addEventListener("click", event => {
      this.toggleHidden(hideId);
    });
  }

  addText(id, text) {
    let element = this.getElementById(id);
    element.innerHTML = text;
  }

  toggleHidden(id) {
    let element = this.getElementById(id);

    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }

  getElementById(id) {
    return this.document.getElementById(id);
  }

}

var _default = DomManip;
exports.default = _default;