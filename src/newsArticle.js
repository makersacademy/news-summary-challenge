class newsArticle {
  constructor(){
    this._webUrl = "";
    this._webTitle = "";
    this._sectionName = "";
    this._webPublicationDate = "";
    this._imgUrl = "";
  }

  populate(webUrl, webTitle, sectionName, webPublicationDate){
    this._webUrl = webUrl;
    this._webTitle = webTitle;
    this._sectionName = sectionName;
    this._webPublicationDate = webPublicationDate;
    this._imgUrl = "https://picsum.photos/320/240"
  }
}
