function NodeBuilder() {
}

NodeBuilder.prototype.createNode = function (type, id = null, htmlclass = null) {
  let element = document.createElement(type);
  if (id) {
    element.setAttribute('id', id);
  }
  if (htmlclass) {
    element.setAttribute('class', htmlclass);
  }
  return element;
}

NodeBuilder.prototype.addNode = function(node, afterID) {
  let afterNode = this.getElementById(afterID);
  afterNode.appendChild(node);
}

NodeBuilder.prototype.addAttribute = function(id, name, initialValue) {
  let node = this.getElementById(id)
  node.setAttribute(name, initialValue)
}

NodeBuilder.prototype.updateText = function(id, value) {
  let element = this.getElementById(id);
  if (element === null) {
    throw new Error('No element with that id');
  } else {
    element.innerHTML = value;
  }
}

NodeBuilder.prototype.getElementById = function(id) {
  return document.getElementById(id);
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = NodeBuilder
}
