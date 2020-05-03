document.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM content loaded")
    var newsArray = []
        
    function getNews() {
        
        for(var i=0; i < 5; i++) {
            newsArray.push(new Article(45, "henry"))
        }
    }

    getNews()
    
    function updateNews() {
        var newsArticle = document.getElementById('news')
        for(var i = 0; i < newsArray.length; i++) {
        var article = newsArray[i]
        var newspiece = document.createElement('div', {
            'id' : article['id'],
            'type': article['type'],
        })
        
        newspiece.setAttribute("id", "john")
        newspiece.innerHTML = "<b>" + article['type'] + "</b>  " + article['id'];
        newsArticle.appendChild(newspiece)
        console.log("working!")

        }
        console.log("Hello")
    }

    updateNews()


    // testRun(article)

    // function testRun() {
    //     var articleContainer = document.getElementById('actual-article')
    //     for(var i = 0; i < 2; i++) {
    //     var id = document.createElement('id-num')
    //     id.innerHTML = article['id']
    //     articleContainer.appendChild(id);
    //     console.log("hello")
    //     }
    // }
});
