class NewsView {
  constructor(client) {
    this.client = client;
    this.btn = document.querySelector('#submit-btn')
    
    this.btn.addEventListener('click', () => {
      const keyword = document.querySelector('.search-bar').value
      this.client.searchArticles(keyword, data => { 
        const article = document.querySelectorAll('.article-container')
        article.forEach((article) => { article.remove() })
        this.createArticleDiv(data)
      })
    })
  }

  displayArticles() {
    this.client.loadArticles(
      data => this.createArticleDiv(data),
      error => console.log(error)
    )
  }
}

NewsView.prototype.createArticleDiv = (data) => {
  data.response.results.forEach((article) => {
    const articleMainContainer = document.querySelector('#article-main-container')
    const articleContainer = document.createElement('div')

    articleContainer.classList.add('article-container')
    articleContainer.innerHTML = NewsView.prototype.articleInnerHTML(article)
    articleMainContainer.appendChild(articleContainer)
  })
}

NewsView.prototype.articleInnerHTML = (article) => {
  return `
  <a href="${article.webUrl}" class="article-link">
    <img src="${article.fields.thumbnail}" alt="" class="article-img">
    <div class="article-text-container">
      <h2 class="article-title">${article.webTitle}</h2>
    </div>
  </a>`
}

module.exports = { NewsView }