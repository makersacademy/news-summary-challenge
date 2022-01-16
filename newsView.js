class NewsView {
  constructor(model) {
    this.model = model;
    // const buttonEl = document.querySelector('#headline-container');
    // buttonEl.addEventListener("click", () => {
    //   console.log("You clicked a headline")
    // })
  }

  displayHeadlines() {
    const headlines = this.model.getHeadlines();
    headlines.forEach(headline => {
      this.headlinesContainerEl = document.querySelector('#headline-container');
      const headlineEl = document.createElement('div');
      headlineEl.innerText = headline["headline"];
      headlineEl.className = 'headline';
      headlineEl.style.cssText = "font-size:25px;color:darkblue"
      this.headlinesContainerEl.append(headlineEl);
      const viewArticleButtonEl = document.createElement('button')
      viewArticleButtonEl.innerText = "View Article"
      this.headlinesContainerEl.append(viewArticleButtonEl)
      const imageEl = document.createElement('img')
      imageEl.className = 'headlineImage'
      imageEl.src = headline["thumbnail"]
      this.headlinesContainerEl.append(imageEl)
    });
  }
  setImageSrc(data) {
    data
  }
}

module.exports = NewsView;