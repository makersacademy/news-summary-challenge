class NewsView {
  constructor(model) {
    this.model = model;
    // const buttonEl = document.querySelector('#headline-container');
    // buttonEl.addEventListener("click", ()=> {
    //   console.log("Clicked on event")
    //   this.displayArticle({"body":"Test article"});
    // })
  }

  displayNewsSummary() {
    const newsData = this.model.getNewsInfo();
    newsData.forEach(newsItem => {
      this.displayHeadline(newsItem)
      this.displayViewArticleButton(newsItem)
      this.displayImage(newsItem)
    });
  }

  displayHeadline(data) {
    this.headlinesContainerEl = document.querySelector('#headline-container');
    const headlineEl = document.createElement('div');
    headlineEl.innerText = data["headline"];
    headlineEl.className = 'headline';
    headlineEl.style.cssText = "font-size:25px;color:darkblue"
    this.headlinesContainerEl.append(headlineEl);
  }

  displayViewArticleButton(data) {
    this.headlinesContainerEl = document.querySelector('#headline-container');
    const viewArticleButtonEl = document.createElement('button')
    viewArticleButtonEl.innerText = "View Article"
    this.headlinesContainerEl.append(viewArticleButtonEl)
    viewArticleButtonEl.addEventListener("click", ()=> {
      console.log("Clicked on event")
      this.displayArticle({"body": data["body"]});
    // })
    })
  }

  displayImage(data) {
    this.headlinesContainerEl = document.querySelector('#headline-container');
    const imageEl = document.createElement('img')
    imageEl.className = 'headlineImage'
    imageEl.src = data["thumbnail"]
    this.headlinesContainerEl.append(imageEl)
  }

  displayArticle(data) {
    this.headlinesContainerEl = document.querySelector('#article-container');
    const articleEl = document.createElement('p')
    articleEl.className = "article"
    articleEl.innerHTML = data["body"]
    this.headlinesContainerEl.append(articleEl)
  }
}

module.exports = NewsView;