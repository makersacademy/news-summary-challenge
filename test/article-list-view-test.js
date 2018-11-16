import { ArticleListView } from '../src/views/article-list-view.js'

describe('An article list view', () => {
  it('stores a list of articles when instantiated', () => {
    var list = {}
    var view = new ArticleListView(list)
    expect(view.articleList).isEqualTo(list)
  })

  it('can render HTML for its article list', () => {
    var article = {
      headline: 'This is a headline.',
      id: 0
    }
    var list = {
      articles: [article]
    }
    var view = new ArticleListView(list)
    expect(view.renderListHTML()).isEqualTo("<ul><li><a href='#articles/0'>This is a headline.</a></li></ul>")
  })
})
