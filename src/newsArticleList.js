(function(exports) {
    function NewsArticleList() {
        this.articles = []
        this.id = 0
    }
    NewsArticleList.prototype.getData = async function() {
        var self = this
        var url = "http://content.guardianapis.com/search?from-date=2019-03-23&api-key=" +
                    GUARDIAN_API_KEY

        await fetch(url) 
        .then( function(response) {
            return response.json();
        })
        .then(async function(data) {
            async function asyncForEach(array, callback) {
                for (let index = 0; index < array.length; index++) {
                  await callback(array[index], index, array);
                }
              }

            await asyncForEach(data.response.results, async function(newsItem) {
                console.log("3")
                var newsArticle = new NewsArticle(newsItem.webTitle, newsItem.webUrl)
                await newsArticle.getArticleDetails()
                .then(function() {
                    console.log("4")
                    newsArticle.id = self.id
                    self.id += 1
                    console.log("5: id: " + newsArticle.id)
                    self.articles.push(newsArticle)    
                })              
            })
            
        })
        .catch(function(error) {
            console.log(error)
        });
    }
    exports.NewsArticleList = NewsArticleList
})(this)