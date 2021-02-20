class newsStory {
  constructor(){
    this._headline = '';
    this._imageUrl = ''
  }
  addContent(headline, imageUrl){
    this._headline = headline;
    this._imageUrl = imageUrl;
  }

  showHeadline = () => this._headline;
  showImage = () => this._imageUrl;
}