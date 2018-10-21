class DomManip {
  constructor(document) {
    this.document = document
  }

  createElement(type, id = null, htmlClass = null) {
    let element = this.document.createElement(type)
    if (id) { element.setAttribute('id', id) }
    if (htmlClass) { element.setAttribute('class', htmlClass) }
    return element
  }

  addElement(element, parentId) {
    let parentNode = this.getElementById(parentId)
    parentNode.appendChild(element)
  }

  clickHide(id, hideId) {
    this.getElementById(id).addEventListener("click", (event) => {
      this.toggleHidden(hideId)
    })
  }
  // 
  // getIdByClass(htmlClass) {
  //   return this.document.querySelector(htmlClass).id
  // }

  toggleHidden(id) {
    let element = this.getElementById(id)
    if (element.style.display === "none") {
      element.style.display = "block"
    } else {
      element.style.display = "none"
    }
  }

  getElementById(id) {
    return this.document.getElementById(id)
  }
}

export default DomManip
