function interface() {
  for (article of Articles.all) {
    let webTitle = document.createTextNode(`${article.webTitle}`)
    //let webTitleLink = document.createElement("A")
    //webTitleLink.setAttribute("onclick", showArticle(`${article.id}`))
    //webTitleLink.appendChild(webTitle)

    let thumbnail = document.createElement("img")
    var x = document.createElement("A")
    thumbnail.setAttribute("onclick", `showArticle(${article.id})`)
    thumbnail.src = article.thumbnail
    x.appendChild(thumbnail)

    let container = document.getElementById("container")

    container.appendChild(x)
    addLinesTo(container)

    container.appendChild(webTitle)
    addLinesTo(container, 3)
  }
}

function showArticle(id) {
  document.getElementById("container").style.visibility = "hidden"
  //document.getElementById("selectedArticle").style.visibility = "visible"

  let selectedArticle = document.getElementById("selectedArticle")
  article = Articles.all[id - 1]

  let thumbnail = document.createElement("img")
  thumbnail.src = article.thumbnail

  let webTitle = document.createElement("h2")
  let webTitleText = document.createTextNode(`${article.webTitle}`)
  webTitle.appendChild(webTitleText)

  let bodyText = document.createTextNode(`${article.bodyText}`)

  selectedArticle.appendChild(thumbnail)
  addLinesTo(selectedArticle)

  selectedArticle.appendChild(webTitle)
  addLinesTo(selectedArticle)

  selectedArticle.appendChild(bodyText)
}

function addLinesTo(element, times = 1) {
  for (var i = 0; i < times; i++) {
    element.appendChild(document.createElement("br"));
  }
}
