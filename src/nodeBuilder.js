class NodeBuilder {
  createNode(type, id = null, htmlclass = null) {
    let element = document.createElement(type);
    if (id) {
      element.setAttribute('id', id);
    }
    if (htmlclass) {
      element.setAttribute('class', htmlclass);
    }
    return element;
  }

  addNode(node, afterID) {
    let afterNode = this.getElementById(afterID);
    afterNode.appendChild(node);
  }

  addAttribute(id, name, initialValue) {
    let node = this.getElementById(id)
    node.setAttribute(name, initialValue)
  }

  updateText(id, value) {
    let element = this.getElementById(id);
    if (element === null) {
      throw new Error('No element with that id');
    } else {
      element.innerHTML = value;
    }
  }

  getParentId(id) {
    let child = this.getElementById(id)
    return child.parentNode.id
  }

  getText(id) {
    return this.getElementById(id).value;
  }

  updateClick(id, func) {
    this.getElementById(id).addEventListener('click', func)
  }

  getElementById(id) {
    return document.getElementById(id);
  }
}


if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = NodeBuilder
}
