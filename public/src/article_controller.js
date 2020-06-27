(function(exports) {

    function ArticleController() {
        this._indexNum = 0
        this._articleSourceData = null
        this._allArticlesArray = []
    }

    ArticleController.prototype.getArticles = function() {
        var request = new XMLHttpRequest()

        request.open('GET', "https://content.guardianapis.com/search?api-key=c2856b15-2089-4310-b8b5-dbe287674c9f")
        request.send()

        request.onload = () => {
            if (request.status === 200) { 
                console.log(JSON.parse(request.response.results))
                this._articleSourceData = JSON.parse(request.response.results)
            } else {
                console.log("error")
            }
        }
    }

    ArticleController.prototype.createArticleObjects = function() {
        this._articleSourceData.forEach( (article) => {
            this._allArticlesArray.push( new Article(this._indexNum, article.webTitle, article.webUrl));
            this._indexNum++
        })
    }

    ArticleController.prototype.getArrayOfArticles = function() {
        return this._allArticlesArray
    }


    exports.ArticleController = ArticleController
})(this);
