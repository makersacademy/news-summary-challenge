const Render = function() {
  this.root = document.getElementById("root")
}

Render.prototype.renderSummaryDiv = function(gResult, ayResult){
  parentDiv = document.createElement("DIV")
  headlineEl = this.renderH(2, gResult.title)
  parentDiv.appendChild(headlineEl)
  p = document.createElement("P")
  p.innerHTML = gResult.body
  parentDiv.appendChild(p)
  return parentDiv
}

Render.prototype.adddDivWithId = function(id) {
  div = document.createElement("DIV")
  div.setAttribute("id", id)
  this.root.appendChild(div)
}

Render.prototype.appendToDiv = function(id, element) {
  div = document.getElementById(id)
  div.appendChild(element)
}

Render.prototype.renderH = function(num, innerHtml) {
  h = document.createElement(`H${num}`)
  h.innerHTML = innerHtml
  return h
}