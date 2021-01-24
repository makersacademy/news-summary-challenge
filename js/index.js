
const articles = {
  article1: {img: "https://via.placeholder.com/100x50.png?text=Image+1", headline: "Headline 1"},
  article2: {img: "https://via.placeholder.com/100x50.png?text=Image+2", headline: "Headline 3"},
  article3: {img: "https://via.placeholder.com/100x50.png?text=Image+3", headline: "Headline 3"}
};


function displayHeadlines() {
  var gridContainer = document.getElementsByClassName('grid-container')

  for (const [key, value] of Object.entries(articles)) {
    let image = createImage(value.img)
    let headline = createHeadline(value.headline)
    let article = createArticle(image, headline)

    gridContainer[0].appendChild(article)
  };
}

function createImage(img) {
  let image = document.createElement('img')
  image.setAttribute("src", img)
  image.setAttribute("style", "width:100%")
  return image
}

function createHeadline(headline_text) {
  let headline = document.createElement('h4')
  headline.innerText = headline_text
  return headline
}

function createArticle(image, headline) {
  let article = document.createElement('div')
  article.setAttribute("class", "card")
  article.appendChild(image)
  article.appendChild(headline)
  return article
}

displayHeadlines();
