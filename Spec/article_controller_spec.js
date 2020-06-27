
function createsArrayOfArticles1() {
    var articleController = new ArticleController;
    articleController.getArticles = function() {
        this._articleSourceData = [{webTitle: "first title", webUrl: "www.test.com/firsturl"}, {webTitle: "secind title", webUrl: "www.test.com/secondurl"}]
    }
    articleController.getArticles()
    articleController.createArticleObjects()
    expect.isEqual(articleController.getArrayOfArticles()[0].getTitle() === "first title", "articles get added to array with title")

}

function createsArrayOfArticles2() {
    var articleController = new ArticleController;
    articleController.getArticles = function() {
        this._articleSourceData = [{webTitle: "first title", webUrl: "www.test.com/firsturl"}, {webTitle: "secind title", webUrl: "www.test.com/secondurl"}]
    }
    articleController.getArticles()
    articleController.createArticleObjects()
    expect.isEqual(articleController.getArrayOfArticles()[1].getId() === 1, "articles get added to array with id")

}

function createsArrayOfArticles3() {
    var articleController = new ArticleController;
    articleController.getArticles = function() {
        this._articleSourceData = [{webTitle: "first title", webUrl: "www.test.com/firsturl"}, {webTitle: "secind title", webUrl: "www.test.com/secondurl"}]
    }
    articleController.getArticles()
    articleController.createArticleObjects()
    expect.isEqual(articleController.getArrayOfArticles()[1].getUrl() === "www.test.com/secondurl", "articles get added to array with url")

}

createsArrayOfArticles1()
createsArrayOfArticles2()
createsArrayOfArticles3()