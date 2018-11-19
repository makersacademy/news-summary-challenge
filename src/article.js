class Article {
  constructor(id, title, thumbnail){
    this._id = id;
    this._title = title;
    this._thumbnail = thumbnail;
  }

  getId(){
    return this._id;
  }

  getTitle(){
    return this._title;
  }

  getThumbnail(){
    return this._thumbnail;
  }

}
