class NewsSummaryApp extends BaseController{
  getManager(){
    this.manager = (this.manager || new ArticleManager);
    return this.manager;
  }

  build_context(){
    var manager = this.getManager();
    var context = {}
    manager.articles.forEach((article, index) => {
      context["title" + index] = article.title
      context["img" + index] = article.thumbnail
      context["id" + index.toString()] = article.id.toString()
    })
    return context
  }

  get_home(){
    var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=politics&show-fields=thumbnail"
    var testUrl = "http://content.guardianapis.com/search?section=politics&show-fields=thumbnail&api-key=test"
    var manager = this.getManager();
    if(manager.articles.length === 0){
      apiRequest(testUrl, (data) => {
        manager.addArticles(JSON.parse(data));
        var context = this.build_context();
        context.title = "Home";
        this.router.render('home', context);
      })
    } else {
      var context = this.build_context();
      context.title = "Home";
      this.router.render('home', context);
    }
  }

  get_article(){
    var context = {title: "Some politics article"}
    var id = window.location.hash[window.location.hash.length -1];
    var manager = this.getManager();
    var article = manager.articles.filter((article) => {return article.id == id})[0]
    var urlPrefix = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="
    apiRequest(urlPrefix+article.url, (data) => {
      context.content = JSON.parse(data).sentences.join(" ");
      context.title = article.title
      context.link = article.url
      this.router.render('article_detail', context)
    })
  }
}
