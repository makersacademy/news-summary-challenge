

var mockData = [{webTitle: "first title", webUrl: "www.test.com/firsturl", fields: {thumbnail: "image", body:"alot of text", trailText: "summary"}}, 
    {webTitle: "second title", webUrl: "www.test.com/secondurl", fields: {thumbnail: "image", body:"alot of text", trailText: "summary"}}]


function createsArrayOfArticles1() {
    var articleController = new ArticleController(mockData)
    articleController.createArticleObjects()
    expect.isEqual(articleController.getArrayOfArticles()[0].getTitle() === "first title", "articles get added to array with title")

}

function createsArrayOfArticles2() {
    var articleController = new ArticleController(mockData)
    articleController.createArticleObjects()
    expect.isEqual(articleController.getArrayOfArticles()[1].getId() === 2, "articles get added to array with id")

}

function createsArrayOfArticles3() {
    var articleController = new ArticleController(mockData)
    articleController.createArticleObjects()
    expect.isEqual(articleController.getArrayOfArticles()[1].getUrl() === "www.test.com/secondurl", "articles get added to array with url")

}

createsArrayOfArticles1()
createsArrayOfArticles2()
createsArrayOfArticles3()