(function(exports) {
  function List(){
    this.storage = [];
  }

  List.prototype.add = function(object) {
    this.storage.push(object);

  }

  List.prototype.getNews = function(url) {
    var list = this;

    fetch(url).then(response => response.json().then(result => result.response.results.forEach(article => list.add(new Article(article)))))





  }


  exports.List = List;
})(this)
