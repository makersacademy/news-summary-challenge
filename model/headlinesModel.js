class Headlines {

  constructor() {
        this.headlines = []
     }

    allHeadlines() {
        console.log('printing this.headlines')
        console.log(this.headlines)
        return this.headlines
    }

    newArticle(article) {
        this.headlines.push(article);
        console.log('printing this.headlines after newArticle is called')
        console.log(this.headlines)
    }


    articleRequest(callback) {
        let articleRequest = new XMLHttpRequest();
        let that = this
        articleRequest.open( 'GET', 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search');
        articleRequest.onload = function() {
        if (articleRequest.readyState === XMLHttpRequest.DONE) {
            if (articleRequest.status === 200) {
            var data = JSON.parse(articleRequest.responseText);
            console.log('checking data')
            console.log(data)
            data.response.results.map(function(article) {
               var n = new Article(article.webTitle, article.webUrl)
                return that.newArticle(n)
            });
            if (callback) {
                callback();
            }
            } else {
                console.log("Article request issue")
            }
        }
    }

        articleRequest.send();
    }

    }

    
    

