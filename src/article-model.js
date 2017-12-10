(function(exports){
  var i = 0;

  function Article(data,body){
    var currentId = (function(){i++; return i})()
    this._id = currentId;
    this._title = data.webTitle;
    this._apiUrl = data.apiUrl;
    this._webUrl = data.webUrl;
    this._img = image(data.fields.body);
    this._body = body;

  }


  function image(body){
    var regex = /<img([\w\W]+?)>/g;
    var imgArray = body.match(regex);
    if (imgArray === null){
      return `<img src="images/image-not-found.jpg">`;
    }
    else{
     return imgArray[0];
   }
  }
  Article.prototype = {
    id: function(){return this._id;},
    title: function(){return this._title;},
    apiUrl: function(){return this._apiUrl;},
    webUrl: function(){return this._webUrl;},
    img: function(){return this._img;},
    text: function(){return this._body.text;},
    summary: function(){return this._body.sentences.join('<br>');}
  }
  exports.Article = Article;
})(this)
