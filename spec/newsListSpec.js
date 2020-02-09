// (function(exports) {
//   var newsList = new NewsList()

//   function addArticleToArray() {
//     console.log('addArticleToArray')
//     newsList.addArticle('Headline 1')
//     expect(newsList.list[0].viewNote()).toEqual('Headline 1')
//   }

//   function viewAllArticles() {
//     console.log('viewAllArticles')
//     newsList.addArticle('Headline 1')
//     expect(newsList.viewAll()[0]).toBe(new NewsArticle)
//   }

//   function addUniqueId() {
//     console.log('addUniqueId')

//     newsList.addArticle('Headline 1')
//     expect(newsList.list[0].id).toEqual(0)

//     newsList.addArticle('Headline 2')
//     expect(newsList.list[1].id).toEqual(1)
//   }

//   addArticleToArray()
//   viewAllArticles()
//   addUniqueId()
// })(this)