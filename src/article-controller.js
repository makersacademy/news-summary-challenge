(function(exports){

    function ArticleController(articleListView, doc = document){
      this.articleListView = articleListView;
      this.doc = doc;
    }

    ArticleController.prototype.insert = function(divId = 'app'){
      var message = this.articleListView.htmlIfy();
      var element = this.doc.getElementById(divId);
      element.innerHTML = message;
    }

    ArticleController.prototype.getArticles = function(){
      var request = new XMLHttpRequest()

      request.open('GET', 'https://content.guardianapis.com/search?api-key=', true)

      request.onload = function(){

        data = JSON.parse(this.response)

          if (request.status >= 200 && request.status < 300) {
            var articles = data.response.results

            // articles.forEach(article => {
            //   console.log(article.webTitle)
            // })

            // console.log(articles)

            for(var index = 0; index < articles.length; index++){
            articles[index].webTitle
            console.log(articles[index].webTitle)
            //   this.articleListView.articleList.listOfArticles.push(new Article(article.webTitle))
              var message = articles[index].webTitle
              var element = document.getElementById("headline")
              element.innerHTML = message;
            }
            // this.insert()
          } else {
            throw new Error('Request failed')
          }
        }
      request.send()
    }
   
    exports.ArticleController = ArticleController;

})(this);