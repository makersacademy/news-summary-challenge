var NewsArticleDouble = function(title){
    this.title = title
}
var NewsArticlesListDouble = function() {
    var articles = []
    newsDouble1 = new NewsArticleDouble(exampleData.response.results[0].webTitle)
    newsDouble2 = new NewsArticleDouble(exampleData.response.results[1].webTitle)
    articles.push(newsDouble1)
    articles.push(newsDouble2)
    this.articles = articles
}

describe('NewsController', function(){
    it('is a thing', function() {
        articlesList = new NewsArticlesListDouble
        controller = new NewsController(articlesList)
    })
    it('renders a list', function(){
        articlesList = new NewsArticlesListDouble
        controller = new NewsController(articlesList)
        controller.renderPage()
        html = "<p>Gibraltar v Republic of Ireland: Euro 2020 qualifier – live!</p>" +
            "<p>Brexit march: '1 million' rally for people's vote - live updates</p>"
        assert.isEqual(document.getElementById("app").innerHTML, html)
    })
})