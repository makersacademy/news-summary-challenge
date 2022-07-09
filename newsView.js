class NewsView {
  constructor(model, api) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model;
    this.api = api;
  }

  showGuardianNews(){
    console.log('Showing Guardian News')
    document.querySelectorAll('.news-image').forEach((image) => image.remove());
    document.querySelectorAll('.news-title').forEach((title) => title.remove());
    // Need to insert this.api.loadNews() here...
    this.model.guardianNewsShow().forEach((newsItem) => {
      let aImage = document.createElement("a");
      aImage.setAttribute("src", newsItem.image);
      aImage.setAttribute("class", "news-image")
      let divTitle = document.createElement('div');
      divTitle.setAttribute("class", "news-title")
      this.mainContainerEl.append(aImage)
      this.mainContainerEl.append(divTitle);
    })
  }

}

module.exports = NewsView;
