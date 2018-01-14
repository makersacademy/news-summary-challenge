class NewsSummaryApp extends BaseController{
  getManager(){
    this.manager = (this.manager || new ArticleManager);
    return this.manager;
  }

  get_home(){
    var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=politics&show-fields=thumbnail"
    var testUrl = "http://content.guardianapis.com/search?section=politics&show-fields=thumbnail&api-key=test"
    var manager = this.getManager();
    apiRequest(testUrl, (data) => {
      // Need to parse JSON before using it
      manager.addArticles(JSON.parse(data));
      console.log(this);
    })
    var context = {title: "Home"}
    this.router.render('home', context);
  }
}
