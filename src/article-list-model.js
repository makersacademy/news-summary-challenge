(function(exports) {
    let worldNewsAPI = "https://content.guardianapis.com/world?&show-fields=thumbnail,body&show-blocks=all&api-key="+config.apiKey;
    let articles = [];

    function ArticleList(){
         this.cacheArticles();
         console.log(worldNewsAPI);
    }

    ArticleList.prototype.cacheArticles = function() {
        jQuery.ajax({
            type: 'GET',
            url: worldNewsAPI,
            async: false,
            success: function (articlesResponse) {
                let apiResults = articlesResponse.response.results;
                for (let i = 0; i < apiResults.length; i++) {
                    articles.push(apiResults[i]);
                }
            }
        });
    };

    ArticleList.prototype.getArticles = function() {
        let article = [];
        for (let i = 0; i < articles.length; i++) {
            article.push({id: articles[i].id ,title: articles[i].webTitle, body: articles[i].fields.body ,img: articles[i].fields.thumbnail});
        }
        return article;
    };


    exports.ArticleList = ArticleList;

})(this);
