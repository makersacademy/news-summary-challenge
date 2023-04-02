class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector("#main-container");
    this.buttonEl = document.querySelector("#search-button");

    this.buttonEl.addEventListener("click", () => {
      this.searchValue = document.querySelector("#search-input").value;
      this.client.loadSearchData(this.searchValue, () => {
        this.displayNewsFromSearch();
      });
    });
  }

  displayNews() {
    const news = this.model.allNews().response.results;
    console.log(news);
    news.forEach((news) => {
      // console.log(news)

      const newsElement = document.createElement("div");
      newsElement.className += "col-lg-6 news";

      const cardElement = document.createElement("div");
      cardElement.className = "card";

      const newsTitleLink = document.createElement("a");
      newsTitleLink.href = news.webUrl;
      newsTitleLink.className += "article-title";
      newsTitleLink.textContent = news.webTitle;

      const imageElement = document.createElement("img");
      imageElement.setAttribute("src", news.fields.thumbnail);
      imageElement.className = "thumbnail-img";

      cardElement.appendChild(imageElement);
      cardElement.appendChild(newsTitleLink);

      newsElement.append(cardElement);
      this.mainContainerEl.append(newsElement);
    });
  }

  displayNewsFromApi() {
    this.client.loadData((data) => {
      // console.log(data)
      this.model.addNews(data);
      this.model.allNews();
      this.displayNews();
    });
  }

  displayNewsFromSearch() {
    this.client.loadSearchData(this.searchValue, (data) => {
      console.log(this.searchValue);
      // console.log(data)
      this.model.addNews(data);
      this.model.allNews();
      this.mainContainerEl.innerHTML = ""; // Clear previous results
      this.displayNews();
    });
  }
}

module.exports = NewsView;
