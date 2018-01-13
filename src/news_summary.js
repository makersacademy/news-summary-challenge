class NewsSummaryApp extends BaseController{
  getManager(){
    this.manager = (this.manager || new ArticleManager);
    return this.manager;
  }


}
