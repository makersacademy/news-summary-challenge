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

      // Set headline
      const headline = document.createElement('a');
      headline.text = article.webTitle;
      headline.href = `#${article.id}`;

      // Set image
      const imgDiv = document.createElement('div');
      const img = document.createElement('img');
      img.src = article.fields.thumbnail;

      // Add headline and image to article div
      imgDiv.append(img);
      div.append(headline);
      div.append(imgDiv);

      // Append article div to main container
      div.className = 'article';
      this.mainContainerEl.append(div);
    });
  }
}

module.exports = ArticlesView;
