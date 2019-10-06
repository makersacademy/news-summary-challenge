const Guardian = require('guardian-js');

const api = new Guardian(apiKey, false);

(function(exports){
  function Headline(){
    this.news = []
  };

  Headline.prototype.get = function(){
    var artickle = api.content.search('football', {
  tag: 'sports'
});
    this.news.push(artickle)
  };

  exports.Headline = Headline;
}) (this);

// var news = new Headline()
// news.get()
// console.log(news)
