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

      var that = this
      var request = new XMLHttpRequest()

      request.open('GET', 'https://content.guardianapis.com/search?api-key=test', true)

      request.onload = function(){

        data = JSON.parse(this.response)

          if (request.status >= 200 && request.status < 300) {

            var articles = data.response.results

            for(var index = 0; index < articles.length; index++){
              articles[index].webTitle
              that.articleListView.articleList.listOfArticles.push(new Article(articles[index].webTitle))
              }

            that.insert()

          } else {
            throw new Error('Request failed')
          }
        }
      request.send()
    }
   
    exports.ArticleController = ArticleController;

})(this);