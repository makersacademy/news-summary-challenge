(function (exports) {
  class Article {
    constructor(title, url) {
      this._title = title;
      this._url = url;
    };

    title() {
      return this._title;
    };

    url() {
     return this._url;
   };
 };

  exports.Article = Article;
})(this);
