var articleDouble = { response: {
  content: {
    apiUrl: "api",
    webTitle: "Title",
    fields: {
      body: "This is an article"
      }
    }
  }
}

var article = new Article(articleDouble)

function articleHasTitle(){
  return expect(article.title, "article.title should return title of article").eq("Title")
}
tests.push(articleHasTitle)
