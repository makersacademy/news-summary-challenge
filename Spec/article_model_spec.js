
function articleModel1() {
    var article = new Article(1, "test title", "www.test.com")
    expect.isEqual(article.getId() === 1, "Article holds an ID")
}

function articleModel2() {
    var article = new Article(1, "test title", "www.test.com")
    expect.isEqual(article.getTitle() === "test title", "Article holds a title")
}

function articleModel3() {
    var article = new Article(1, "test title", "www.test.com")
    expect.isEqual(article.getUrl() === "www.test.com", "Article holds a URL")
}

articleModel1()
articleModel2()
articleModel3()