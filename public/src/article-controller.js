(function(exports) {
  function ArticleController(articlesList = new ArticlesList) {
    this.articlesList = articlesList
    this.articlesListView = new ArticlesListView(this.articlesList)
    this.html = this.articlesListView.returnHtml()
  }

  ArticleController.prototype.renderHtml = function(element = document.getElementById("app")) {
    return element.innerHTML = this.html
  }

  ArticleController.prototype.renderSummary = function() {
    console.log(this.articlesList)
    // get identifier from article
    var html = "<div>"
    // html += `<img src="${this.articlesList.listArray[id].image}">`
    html += `<a href="${
      this.articlesList.listArray[0].webUrl
    }">${
      this.articlesList.listArray[0].webTitle
    }</a>`
    // html += `<div>${this.articlesList.listArray[id].content.slice(200)}</div>`
    html += "</div>"
    // return html
    // var html = "<p>Hash changed!</p>"
    return document.getElementById("app").innerHTML = html
  }

  exports.ArticleController = ArticleController
})(this)