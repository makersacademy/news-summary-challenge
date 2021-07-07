function NewsArticle(headline, summary, link){
  this._headline = headline;
  this._summary = summary;
  this._link = link;
};

NewsArticle.prototype = {
  headline: function(){
    return this._headline;
  },

  summary: function(){
    return this._summary;
  },

  link: function(){
    return this._link;
  },
};
