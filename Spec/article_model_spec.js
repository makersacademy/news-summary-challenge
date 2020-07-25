
function articleModel1() {
    var article = new Article(1, "test title", "www.test.com", "image", "<p><p><p><p><p><p><p><p><p><p>", "short text")
    expect.isEqual(article.getId() === 1, "Article holds an ID")
}

function articleModel2() {
    var article = new Article(1, "test title", "www.test.com", "image", "<p><p><p><p><p><p><p><p><p><p>", "short text")
    expect.isEqual(article.getTitle() === "test title", "Article holds a title")
}

function articleModel3() {
    var article = new Article(1, "test title", "www.test.com", "image", "<p><p><p><p><p><p><p><p><p><p>", "short text")
    expect.isEqual(article.getUrl() === "www.test.com", "Article holds a URL")
}

function articleModel4() {
    var article = new Article(1, "test title", "www.test.com", "image", "<p><p><p><p><p><p><p><p><p><p>", "short text")
    expect.isEqual(article.getThumbnail() === "image", "Article holds a Thumbnail")
}

function articleModel5() {
    var article = new Article(1, "test title", "www.test.com", "image", "<p><p><p><p><p><p><p><p><p><p>", "short text")
    expect.isEqual(article.getSummary() === "short text", "Article holds a summary")
}

function articleModel5() {
    var article = new Article(1, "test title", "www.test.com", "image", "<p>i<p>i<p>i<p>i<p>i<p>i<p>i<p>i<p>i<p>", "short text")
    expect.isEqual(article.getBody() === "iiiiiii", "Article cuts body to 8 paragraphs")
}

articleModel1()
articleModel2()
articleModel3()
articleModel4()
articleModel5()