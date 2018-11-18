'use strict'

function showArticles(container) {

  requestNews(20, container, function(container, json){
    // debugger;
    let results = json.response.results;
    var articleList = [];
    for(var i=0; i<results.length; ++i) {
      let article = results[i];
      articleList.push(new Article(article.id, article.webTitle, article.fields.thumbnail));
    }
    new ArticleListView().render(container, articleList);
  });
}
