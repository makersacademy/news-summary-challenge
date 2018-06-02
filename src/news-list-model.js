(function(exports){

  function NewsList(){
    this._news = [];
  }

  NewsList.prototype = {

    add: function (headlines, img, summary, bodytext) {
      const id = this._news.length;
      const news = new News(id, headlines, img, summary, bodytext);
      var Id = news.get().id;
      var Headline = news.get().headline;
      var Img = news.get().image;
      var Summary = news.get().summary;
      var Bodytext = news.get().body;

      this._news.push(
        [Id,
          [Headline, Img, Summary, Bodytext]
        ]
      );
    },

    get: function () {
      return this._news;
    },

    getById: function(id, news = this._news){
      const newsHash = new Map(news)
      return{
        headline: newsHash.get(id)[0],
        image: newsHash.get(id)[1],
        summary: newsHash.get(id)[2],
        bodyText: newsHash.get(id)[3]
      }
    }

  }

  exports.NewsList = NewsList;

})(this);
