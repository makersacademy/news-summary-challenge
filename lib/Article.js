class Article{
  constructor(urlID, apiID, title){
    this.urlID = urlID;
    this.apiID = apiID;
    this.title = title;
    Article.prototype.listOfArticles.push(this)
  }
}

Article.prototype.listOfArticles = [];