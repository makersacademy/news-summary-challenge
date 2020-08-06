function showArticleSummary(id) {
    var singleArticle = new ArticleSummaryView(controller.getArrayOfArticles()[(parseInt(id) - 1)])
    document.getElementById('app').innerHTML = singleArticle.singleArticleView()
}

function returnToListView() {
    controller.createArticleObjects()
    document.getElementById('app').innerHTML = controller.convertListToView()
}

async function articles() {
    let data = await getResponse()
    controller = new ArticleController(data)
    returnToListView()
} 