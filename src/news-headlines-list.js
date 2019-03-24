"use strict";
(function(exports){
  function NewsHeadlinesList(NewsHeadline){
    this.id = 0;
    this.newsHeadlineFunction = NewsHeadline;
    this.headlines = [];
    this.fetchData();
  }
  NewsHeadlinesList.prototype ={
      fetchData: function(){
        var self = this
        fetch('https://content.guardianapis.com/politics?order-by=newest&api-key=f67ebf16-cebc-42d4-bfad-a91971cd21f5')
        .then(function(response){
          return response.json();
        })
        .then(function(headlinesData){
            headlinesData.response.results.forEach(function(headline){
              self.headlines.push(new self.newsHeadlineFunction(self.id, headline.webTitle, headline.apiUrl))
              self.id += 1
              })
        });
    },
      getHeadlines: function(){
        return this.headlines;
      }
  }
  exports.NewsHeadlinesList = NewsHeadlinesList
})(this)
