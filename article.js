class Article {
  constructor(data) {
    this.data = data
  }

  newHeadlineElement(index) { //turn each note into an p element
  let headlineLink = document.createElement('a') //create element
  headlineLink.href = '#' + index
  headlineLink.id = 'article' + index
  headlineLink.textContent = this.data.webTitle; // set element content to substing of 20
  return headlineLink// show your edits
  }

  createArticleImage() {
    let image = document.createElement('img')
    let body = this.data.fields.body;
    let el = document.createElement('body');
    el.innerHTML = body
    let images = el.getElementsByTagName('img')
    let img;
    if (images.length !== 0) {
      img = images[0].getAttribute('src')
    }
    else {
      img = ""
    };
    image.setAttribute("src", img)
    // image.setAttribute("style", "width:100%")
    return image
  }
}
