class ArticlesView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayArticles() {
    // Clear articles before getting new articles
    const articleDivs = document.querySelector('.article');

    if (articleDivs !== null) {
      articleDivs.forEach((article) => {
        article.remove();
      });
    }

    // Get new articles
    const articles = this.model.getArticles();

    // Add div for each article
    articles.forEach((article) => {
      const div = document.createElement('div');
      const headline = document.createElement('a');
      headline.text = article.webTitle;
      headline.href = article.webUrl;

      const imgDiv = document.createElement('div');
      const img = document.createElement('img');

      imgDiv.append(img);
      div.append(headline);
      div.append(imgDiv);

      img.src = article.fields.thumbnail;
      div.className = 'article';
      this.mainContainerEl.append(div);
    });
  }
}

module.exports = ArticlesView;
