
describe('Article List', () => {
    it('retrieves a list of articles', () => {
      let list1 = new ArticleList
      let result = list1.getArticleList()
      expect(list1.articles.length).toEqual(result)
    })

    // it('can add articles to the list', () => {
    //   let list2 = new ArticleList
    //   list2.addArticle("First title", "First url")
    //   list2.addArticle("Second title", "Second url")
    //   expect(list2.articles.length).toEqual(2)
    // })

})
