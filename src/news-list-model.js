(function(exports){

  function NewsList(){
    this._headlines = [];
  }

  NewsList.prototype = {

    add: function (headlines, img) {
      const id = this._headlines.length;
      const news = new News(id, headlines, img);
      this._headlines.push(
        [news.get().id,
          [news.get().headline, news.get().image]
        ]
      );
    },

    get: function () {
      return this._headlines;
    },

    getNewsById: function(id, news = this._headlines){
      const newsHash = new Map(news)
      return newsHash.get(id)[0]
    },

    getImageById: function(id, img = this._headlines){
      const newsHash = new Map(img)
      return newsHash.get(id)[1]
    }

  }

  exports.NewsList = NewsList;

})(this);
