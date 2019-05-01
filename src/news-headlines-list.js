"use strict";
(function(exports){
  function NewsHeadlinesList(NewsHeadline, dataSource){
    this.id = 0;
    this.newsHeadlineFunction = NewsHeadline;
    this.headlines = [];
    this.dataSource = dataSource;
    this.fetchData();
  }
  NewsHeadlinesList.prototype ={
      fetchData: function(){
        var self = this
        fetch(this.dataSource)
        .then(function(response){
          return response.json();
        })
        .then(function(headlinesData){
            headlinesData.response.results.forEach(function(headline){
              self.headlines.push(new self.newsHeadlineFunction(self.id, headline.webTitle, headline.apiUrl))
              self.id += 1
              })
        })
        .catch(function(error) {
          console.log('Error:', error)
          console.log('Datasource is:', dataSource)
        });
    },

      getHeadlines: function(){
        return this.headlines;
      }
  }
  exports.NewsHeadlinesList = NewsHeadlinesList
})(this)
