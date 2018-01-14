class NewsSummaryApp extends BaseController{
  getManager(){
    this.manager = (this.manager || new ArticleManager);
    return this.manager;
  }

  get_home(){
    var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=politics&show-fields=thumbnail"
    var testUrl = "http://content.guardianapis.com/search?section=politics&show-fields=thumbnail&api-key=test"
    var manager = this.getManager();
    var context = {title: "Home"}
    apiRequest(testUrl, (data) => {
      // Need to parse JSON before using it
      manager.addArticles(JSON.parse(data));
      console.log(this);
      manager.articles.forEach((article, index) => {
        context["title" + index] = article.title
        context["link" + index] = article.url
        context["img" + index] = article.thumbnail
      })
      this.router.render('home', context);
    })
    console.log(context)
  }
}
