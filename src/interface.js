function interface() {
  for (article of Articles.all) {
    let webTitle = document.createTextNode(`${article.webTitle}`)
    let webTitleLink = document.createElement("A")
    //webTitleLink.setAttribute("onclick", showArticle(`${article.id}`))
    webTitleLink.appendChild(webTitle)

    let thumbnail = document.createElement("img")
    thumbnail.setAttribute("onclick", showArticle(`${article.id}`))
    thumbnail.src = article.thumbnail

    addElement("container", thumbnail)
    addLines("container")
    addElement("container", webTitleLink)
    addLines("container", 3)
  }
}

function showArticle(id) {

}

function addLines(container, times = 1) {
  for (var i = 0; i < times; i++) {
    document.getElementById(container).appendChild(document.createElement("br"));
  }
}

function addElement(container, element) {
  document.getElementById(container).appendChild(element)
}
