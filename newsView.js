class NewsView {
  constructor(model, api) {
    this.mainContainerEl = document.querySelector('#main-container');
    this.model = model;
    this.api = api;
    this.page = 1;
    
    const nextPageBtn = document.querySelector('#next-page');
    nextPageBtn.addEventListener('click', () => {
      this.page += 1;
      this.showGuardianNewsFromApi();
    })
    this.queryKeyWord = "";

    const queryKeyWordEl = document.querySelector('#query-keyword');
    const queryKeyWordBtn = document.querySelector('#query-keyword-button');
    queryKeyWordBtn.addEventListener('click', () => {
      this.queryKeyWord = queryKeyWordEl.value;
      this.page = 1;
      this.showGuardianNewsFromApi();
      queryKeyWordEl.value = "";
    })
  }

  showGuardianNews(){
    console.log('Showing Guardian News');
    // clear old headlines on html
    document.querySelectorAll('.news-image').forEach((image) => image.remove());
    document.querySelectorAll('.news-title').forEach((title) => title.remove());
    document.querySelectorAll('.publication-date').forEach((date) => date.remove());

    // adding new news summary
    this.model.guardianNewsShow().forEach((newsItem) => {
      
      // Image
      let imgImage = document.createElement("img");
      imgImage.setAttribute("src", newsItem.image);
      imgImage.setAttribute("class", "news-image");

      //Title
      let divTitle = document.createElement('div');
      divTitle.setAttribute("class", "news-title");
      divTitle.innerHTML = '<a href="' + newsItem.articleUrl + '">' + newsItem.title + '</a>'
      
      // Publication Date
      let divDate = document.createElement('div');
      divDate.setAttribute("class", 'publication-date');
      divDate.innerText = newsItem.pubDate;

      this.mainContainerEl.append(imgImage);
      this.mainContainerEl.append(divTitle);
      this.mainContainerEl.append(divDate);
    })
  }

  showGuardianNewsFromApi() {
    console.log('showing Guardian News from API');
    this.api.loadNews(this.queryKeyWord, this.page, (data) => {
      this.model.clearNewsList();
      this.model.guardianNewsAdd(data);
      this.showGuardianNews();
    })
  }
}

module.exports = NewsView;
