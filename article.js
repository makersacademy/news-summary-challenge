class Article {
  constructor(data) {
    this.data = data
    this.text = null
  }

  getArticleHeadline(index) { //turn each note into an p element
  let headlineLink = document.createElement('a') //create element
  headlineLink.href = '#' + index
  headlineLink.id = 'article' + index
  headlineLink.textContent = this.data.webTitle; // set element content to substing of 20
  return headlineLink// show your edits
  }

  getArticleImage() {
    let articleImage = document.createElement('img')
    let articleContent = document.createElement('p');
    articleContent.innerHTML = this.data.fields.body;
    let articleImages = articleContent.getElementsByTagName('img')
    let img;
    if (articleImages.length !== 0) {
      img = articleImages[0].getAttribute('src')
    }
    else {
      img = ""
    };
    articleImage.setAttribute("src", img)
    articleImage.setAttribute("style", "width:50%")
    return articleImage
  }

  getArticleText() {
    document.getElementById("headlines-list").innerHTML = this.data.fields.body;
  }
}
