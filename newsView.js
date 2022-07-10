class NewsView {
  constructor(model, api) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model;
    this.api = api;
  }

  showGuardianNews(){
    console.log('Showing Guardian News');
    document.querySelectorAll('.news-image').forEach((image) => image.remove());
    document.querySelectorAll('.news-title').forEach((title) => title.remove());
    // Need to insert this.api.loadNews() here...
    this.model.guardianNewsShow().forEach((newsItem) => {
      let imgImage = document.createElement("img");
      imgImage.setAttribute("src", newsItem.image);
      imgImage.setAttribute("class", "news-image")
      let divTitle = document.createElement('div');
      divTitle.setAttribute("class", "news-title");
      divTitle.innerText = newsItem.title;
      this.mainContainerEl.append(imgImage)
      this.mainContainerEl.append(divTitle);
    })
  }

  showGuardianNewsFromApi() {
    console.log('showing Guardian News from API');
    this.api.loadNews((data) => {
      this.model.clearNewsList();
      this.model.guardianNewsAdd(data);
      this.showGuardianNews();
    })
  }

}

module.exports = NewsView;
