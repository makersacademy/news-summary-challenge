class NewsView {
  constructor(model) {
    this.model = model;
    const buttonEl = document.querySelector('#headline-container');
    buttonEl.addEventListener("click", ()=> {
      console.log("Article clicked")
    })
  }

  displayNewsSummary() {
    const headlines = this.model.getHeadlines();
    headlines.forEach(headline => {
      this.displayHeadline(headline)
      this.displayViewArticleButton()
      this.displayImage(headline)
    });
  }

  displayHeadline(headline) {
    this.headlinesContainerEl = document.querySelector('#headline-container');
    const headlineEl = document.createElement('div');
    headlineEl.innerText = headline["headline"];
    headlineEl.className = 'headline';
    headlineEl.style.cssText = "font-size:25px;color:darkblue"
    this.headlinesContainerEl.append(headlineEl);
  }

  displayViewArticleButton() {
    this.headlinesContainerEl = document.querySelector('#headline-container');
    const viewArticleButtonEl = document.createElement('button')
    viewArticleButtonEl.innerText = "View Article"
    this.headlinesContainerEl.append(viewArticleButtonEl)
  }

  displayImage(headline) {
    this.headlinesContainerEl = document.querySelector('#headline-container');
    const imageEl = document.createElement('img')
    imageEl.className = 'headlineImage'
    imageEl.src = headline["thumbnail"]
    this.headlinesContainerEl.append(imageEl)
  }
}

module.exports = NewsView;