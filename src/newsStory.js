class newsStory {
  constructor(){
    this._headline = '';
  }
  addContent(headline){
    this._headline = headline;
  }

  showHeadline = () => this._headline
}