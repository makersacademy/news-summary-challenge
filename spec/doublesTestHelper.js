class ArticleDouble {
  constructor() {
    this.titleCallCount = 0
    this.urlCallCount = 0
  }
  title() {
    this.titleCallCount++
    return "Title"
  }
  url() {
    this.urlCallCount++
    return "www.url.com"
  }
}

class ArticleListDouble {
  constructor() {
    this.articlesCallCount = 0
    this.addArticleCallCount = 0
  }
  articles() {
    this.articlesCallCount++;
    return [new ArticleDouble(), new ArticleDouble()]
  }
  addArticle() {
    this.addArticleCallCount++
  }
}

class ArticleListViewDouble {
  constructor() {
    this.toHtmlCallCount = 0
    this.updateArticleListCallCount = 0
  }
  toHtml() {
    this.toHtmlCallCount++
    return '<li><a href="www.url.com">Title</a></li><li><a href="www.url.com">Title</a></li>'
  }

  updateArticleList() {
    this.updateArticleListCallCount++
  }
}

class XMLHttpRequestDouble {
  constructor() {
    this.response = '{"response":{"results":[{"title":"Title"},{"title":"Title"}]}}'
    this.openCallCount = 0
    this.onloadCallCount = 0
    this.sendCallCount = 0
  }
  open() {
    this.openCallCount++
  }
  onload() {
    this.onloadCallCount++
  }
  send() {
    this.sendCallCount++
    this.onload()
  }
}
