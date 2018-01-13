class NewsSummaryApp extends BaseController{
  getManager(){
    this.manager = (this.manager || new ArticleManager);
    return this.manager;
  }

  get_home(){
    
    var context = {title: "Home"}
    this.router.render('home', context);
  }
}
