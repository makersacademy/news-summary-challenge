function interface() {
  listArticles()
}

function listArticles() {
  document.getElementById("header").innerText = "- THIS JUST IN -"
  document.getElementById("tom").src = ""

  for (article of Articles.all) {
    let p =  document.createElement("p")
    let webTitle = document.createTextNode(`${article.webTitle}`)
    p.appendChild(webTitle)

    let thumbnail = document.createElement("img")
    var x = document.createElement("A")
    thumbnail.setAttribute("onclick", `showArticle(${article.id})`)
    thumbnail.src = article.thumbnail
    x.appendChild(thumbnail)

    let container = document.getElementById("container")
    let div = document.createElement('div')
    div.className = 'article'

    div.appendChild(x)
    addLinesTo(div)

    div.appendChild(p)

    container.appendChild(div)
    addLinesTo(container, 3)
  }
}

function showArticle(id) {
  document.getElementById("header").innerText = "";

  let selectedArticle = document.getElementById("selectedArticle")
  article = Articles.all[id - 1]

  let thumbnail = document.createElement("img")
  thumbnail.style.width = '800px'
  thumbnail.src = article.thumbnail

  let webTitle = document.createElement("h2")
  let webTitleText = document.createTextNode(`${article.webTitle}`)
  webTitle.appendChild(webTitleText)

  let bodyText = document.createTextNode(`${article.bodyText}`)

  addBackButton()

  selectedArticle.appendChild(thumbnail)
  addLinesTo(selectedArticle)

  selectedArticle.appendChild(webTitle)
  addLinesTo(selectedArticle)

  let p =  document.createElement("p")
  p.appendChild(bodyText)
  selectedArticle.appendChild(p)

  window.scrollTo(0, 0);
  document.getElementById("container").innerHTML = "";
}

function addBackButton() {
  let backForm = document.createElement("form")
  backForm.setAttribute('onclick', `${backHome()}`)

  let backButton = document.createElement("input")
  backButton.setAttribute("id", "button")
  backButton.setAttribute("type", "image")
  backButton.setAttribute("src", "public/back_arrow.png")

  backForm.appendChild(backButton)
  document.getElementById("selectedArticle").appendChild(backForm)
}

function addLinesTo(element, times = 1) {
  for (var i = 0; i < times; i++) {
    element.appendChild(document.createElement("br"));
  }
}

function backHome(){
  document.getElementById("selectedArticle").innerHTML = "";
  listArticles()
}
