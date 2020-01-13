function ArticleModel(title){
  this.title = title
}

ArticleModel.prototype = (function () {

  function displayTitle() {
    return this.title
  }

  return {
    displayTitle: displayTitle
  }
})();