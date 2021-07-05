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

function articleHasApi(){
  return expect(article.api, "article.api should return api url of article").eq("api")
}
tests.push(articleHasApi)

function articleHasBody(){
  return expect(article.body, "article.apiBody should return body of article").eq("This is an article")
}
tests.push(articleHasBody)
