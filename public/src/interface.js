window.addEventListener(`DOMContentLoaded`, function (event) {
    let controller 

    async function articles() {
        let data = await getResponse()
        controller = new ArticleController(data)
        controller.createArticleObjects()
        document.getElementById('app').innerHTML = controller.convertListToView()
    } 

    function showArticleSummary(id) {
        var singleArticle = new ArticleSummaryView(controller.getArrayOfArticles()[(parseInt(id) - 1)])
        document.getElementById('app').innerHTML = singleArticle.singleArticleView()
    }

    function returnToListView() {
        controller.createArticleObjects()
        document.getElementById('app').innerHTML = controller.convertListToView()
    }

    articles()

    window.addEventListener("hashchange", function(event) {
        var id = window.location.hash.slice('#')[1]
        if (id > 0) {
            showArticleSummary(id)
        } else {
            returnToListView()
        }
        window.scroll(0, 0)
    })

    document.getElementById("refresh").addEventListener("click", function(event) {
        event.preventDefault();
        articles()
    })
})