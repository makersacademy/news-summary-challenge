describe('Article List', () => {
    it('retrieves a list of articles', () => {
      let list = new ArticleList
      //mock API
      list.getArticleList()
      expect(list.length).toEqual(10)
    })
  })
