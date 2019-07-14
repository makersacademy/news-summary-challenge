(function(exports) {
  function setupArticleList(list) {    
    var headline = 'Novak Djokovic v Roger Federer – live!';
    var imageUrl = 'http://www.example.com/example.jpg';
    var url = 'http://www.example.com';

    return list.addArticle(headline, url, imageUrl);
  }

  exports.setupArticleList = setupArticleList;
}) (this)