class ArticleDouble {
  constructor() {
    this.titleCallCount = 0
  }
  title() {
    this.titleCallCount++
    return "Title"
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
  addArticle(title) {
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
    return "<li>Title</li><li>Title</li>"
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
