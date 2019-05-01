"use strict";
(function(exports){
  function NewsHeadlinesList(NewsHeadline, dataSource){
    this.id = 0;
    this.newsHeadlineFunction = NewsHeadline;
    this.headlines = [];
    this.dataSource = dataSource;
    
  }
  NewsHeadlinesList.prototype ={
      fetchData: function(createView){
        var self = this
        var buildList = function(){
          console.log(oReq.responseText)
          var response = JSON.parse(oReq.responseText)
          console.log(response)
          console.log('c')
          response.response.results.forEach(function(headline){
            self.headlines.push(new self.newsHeadlineFunction(self.id, headline.webTitle, headline.apiUrl))
            self.id += 1
            console.log('d')
          })
          createView(self)
          }
        
        console.log('a')
        var oReq = new XMLHttpRequest();
        oReq.addEventListener("load", buildList);
        oReq.open("GET", `https://content.guardianapis.com/politics?order-by=newest&api-key=f67ebf16-cebc-42d4-bfad-a91971cd21f5`)
        oReq.send();
      },

      getHeadlines: function(){
        console.log('e')
        return this.headlines;
      }
  }
  exports.NewsHeadlinesList = NewsHeadlinesList
})(this)
