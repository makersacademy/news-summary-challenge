"use strict";
(function(exports){
  function NewsHeadlinesList(NewsHeadline, dataSource){
    this.id = 0;
    this.newsHeadlineFunction = NewsHeadline;
    this.headlines = [];
    this.dataSource = dataSource;
    
  }
  NewsHeadlinesList.prototype ={
      fetchData: function(){
        var self = this
        return new Promise(function(resolve, reject){
          var oReq = new XMLHttpRequest();
          oReq.open("GET", `https://content.guardianapis.com/politics?order-by=newest&api-key=f67ebf16-cebc-42d4-bfad-a91971cd21f5`)
          oReq.onload = function(){
            var response = JSON.parse(oReq.responseText)
          console.log(response)
          console.log('c')
          response.response.results.forEach(function(headline){
            self.headlines.push(new self.newsHeadlineFunction(self.id, headline.webTitle, headline.apiUrl))
            self.id += 1
            console.log('d')
            resolve(self)
          }

        )}

        oReq.onerror = function(){
          reject(Error('Error'))
        }

        oReq.send()

      })
    },

      getHeadlines: function(){
        console.log('e')
        return this.headlines;
      }
  }
  exports.NewsHeadlinesList = NewsHeadlinesList
})(this)
