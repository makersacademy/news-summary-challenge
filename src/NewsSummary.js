

function ListFormater() {

}

ListFormater.prototype.headlines = function(object) {
  return object.response.results
}

ListFormater.prototype.articleSelector = function(object,id) {
  var selectedArticle

  return object.response.results.forEach(function(article){

    if ("/" + article.id === id) {
      return article
    }
  })

}
