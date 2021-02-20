class newsStory {
  constructor(){
    this._headline = '';
    this._imageUrl = ''
    this._summary = ''
  }
  addContent(headline, imageUrl, summary){
    this._headline = headline;
    this._imageUrl = imageUrl;
    this._summary = summary
  }

  showHeadline = () => this._headline;
  showImage = () => this._imageUrl;
  showSummary = () => this._summary;
}