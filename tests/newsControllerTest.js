var NewsArticlesListDouble = function() {
    var articles = []
    articles.push(exampleData.response.results[0].webTitle)
    articles.push(exampleData.response.results[1].webTitle)
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
        controller.render()
        html = "<p>Gibraltar v Republic of Ireland: Euro 2020 qualifier – live!</p>" +
            "<p>Brexit march: '1 million' rally for people's vote - live updates</p>"
        assert.isEqual(document.getElementById("app").innerHTML, html)
    })
})