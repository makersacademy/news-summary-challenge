const Render = function() {
  this.root = document.getElementById("root")
}

Render.prototype.renderSummaryDiv = function(gResult, aylienSummary){
  parentDiv = document.createElement("DIV")

  thumbnail = document.createElement("IMG")
  if (gResult.thumbnailUrl) {
    thumbnail.setAttribute("src", gResult.thumbnailUrl)
  } else {
    thumbnail.setAttribute("src", "https://www.readjunk.com/wp-content/uploads/2015/09/no-image-found1-900x600.png")
  }
  
  headlineEl = this.renderH(2, gResult.title)
  a = document.createElement("A")
  a.setAttribute("href", gResult.webUrl)
  a.innerHTML = headlineEl.outerHTML

  summary = document.createElement("P")
  summary.innerHTML = aylienSummary

  parentDiv.appendChild(a)
  parentDiv.appendChild(thumbnail)
  parentDiv.appendChild(summary)
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