"use strict";
(function(exports){
  function NewsHeadlinesList(NewsHeadline, dataSource){
    this.id = 0;
    this.newsHeadlineFunction = NewsHeadline;
    this.headlines = [];
    this.dataSource = dataSource;
    // this.fetchData();
  }
  NewsHeadlinesList.prototype ={
      fetchData: async function(){
        var self = this
        console.log('a')
        await fetch(this.dataSource)
        .then(function(response){
          console.log('b')
          return response.json();
        })
        .then(function(headlinesData){
            console.log('c')
            headlinesData.response.results.forEach(function(headline){
              self.headlines.push(new self.newsHeadlineFunction(self.id, headline.webTitle, headline.apiUrl))
              self.id += 1
              console.log('d')
              })
        })
        .catch(function(error) {
          console.log('Error:', error)
          console.log('Datasource is:', dataSource)
        });
    },

      getHeadlines: function(){
        console.log('e')
        return this.headlines;
      }
  }
  exports.NewsHeadlinesList = NewsHeadlinesList
})(this)
