const GuardianNewsApi = require("./guardianNewsApi");

class GuardianNewsView {
  constructor(api = new GuardianNewsApi()) {
    this.api = api;
    const searchButton = document.querySelector("#search-button");
    searchButton.addEventListener("click", () => {
      this.searchNews();
    });    
  }



  async searchNews() {
    const searchValue = document.querySelector("#user-input").value;
    // console.log(searchValue);
    const data = await this.api.loadNews(searchValue);
    this.displayNews(data);
  }

  displayNews(data) {
    const clearNews = document.querySelectorAll(".news");
    clearNews.forEach((article) => article.remove());

    const newsDataArray = data;
    // console.log(newsDataArray);
    newsDataArray.forEach((newsArticle) => {
      const newsList = document.querySelector("#news-list");
      const article = document.createElement("div");
      const title = document.createElement("a");
      const image = document.createElement("img");
      const br1 = document.createElement("br");
      const br2 = document.createElement("br");
      const br3 = document.createElement("br");
      title.href = newsArticle.webUrl;
      title.innerText = newsArticle.fields.headline;
      image.src = newsArticle.fields.thumbnail;
      newsList.append(article);
      article.className = "news";
      article.append(title);
      article.append(br1);
      article.append(image);
      article.append(br2);
      article.append(br3);
    });
  }
}

module.exports = GuardianNewsView;