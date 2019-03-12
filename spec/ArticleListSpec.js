
describe('Article List', () => {

    it('can add articles to the list', () => {
      let list2 = new ArticleList
      list2.add("First title", "First url", "First pic")
      list2.add("Second title", "Second url", "Second pic")
      expect(list2.articles.length).toEqual(2)
    })

    it('displays the articles', () => {
      let list3 = new ArticleList
      list3.add("First title", "First url", "First pic")
      expect(list3.displayArticles().tagName).toEqual('DIV')
    })

    it('displays an individual article', () => {
      let list4 = new ArticleList
      let article = {title: "First title", url: "First url", pic: "First pic" }
      expect(list4.displayArticle(article).tagName).toEqual('DIV')
    })

})
