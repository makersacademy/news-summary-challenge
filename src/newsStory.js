class newsStory {
  constructor(){
    this._headline = '';
    this._imageUrl = ''
    this._summary = ''
    this._url = ''
  }
  addContent(headline, imageUrl, summary){
    this._headline = headline;
    this._imageUrl = imageUrl;
    this._summary = summary
  }
  addHeadline(headline) {
    this._headline = headline;
  }
  addSummary(summary){
    this._summary = summary;
  }
  addUrl(url){
    this._url = url;
  }

  showHeadline = () => this._headline;
  showImage = () => this._imageUrl;
  showSummary = () => this._summary;
}
