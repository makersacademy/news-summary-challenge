class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
    this.buttonEl = document.querySelector('#search-button');

    this.buttonEl.addEventListener('click', () => {
      this.searchValue = document.querySelector('#search-input').value; 
      this.client.loadSearchData(this.searchValue, () => {
        this.displayNewsFromSearch();
      })
    })
  }

  displayNews() {
    const news = this.model.allNews();
    // console.log(news)
    news.forEach((news) => {
      // console.log(news)

      const newsElement = document.createElement("div");
      newsElement.className = "news";
      const newsTitleLink = document.createElement("a");
      newsTitleLink.href = news.webUrl;
      newsTitleLink.textContent = news.webTitle;
      const imgWrapper = document.createElement("div");
      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", news.fields.thumbnail);
      imgWrapper.append(imageElement);

      newsElement.appendChild(newsTitleLink);
      newsElement.appendChild(imgWrapper);

      this.mainContainerEl.append(newsElement);
    });
  }

  displayNewsFromApi() {
    this.client.loadData((data) => {
      this.model.addNews(data);
      this.model.allNews();
      this.displayNews();
    });
  }

  displayNewsFromSearch() {
    this.client.loadSearchData(this.searchValue, (data) => {
      console.log(this.searchValue)
      console.log(data)
      this.model.addNews(data);
      this.model.allNews();
      this.mainContainerEl.innerHTML = ""; // Clear previous results
      this.displayNews();
    });
  }
}

module.exports = NewsView;
