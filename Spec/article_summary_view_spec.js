function articleViewTest1() {
    var article = new Article(0, "title 1", "url 1", "image", "body", "summary")
    var articleView = new ArticleSummaryView(article)
    var string1 = `<div class="jumbotron jumbotron-fluid"><div class="container"><h1 class="display-4">title 1</h1><p class="lead">summary</p></div></div></div><div class="article-body">body</div><form action='url 1' class='go-to-article-site'><input type=submit value='Go to Article' class='btn btn-light'></form><div id="go-back-div"><button onclick="location.href='#0'" type="button" id="go-back-button" class='btn btn-light'>Go back</button></div></div>`
    expect.isEqual(articleView.singleArticleView() === string1, "Creates HTML summary view")
}

articleViewTest1()