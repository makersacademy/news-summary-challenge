import { ArticleListView } from '../src/views/article-list-view.js'

describe('An article list view', () => {
  var view
  var list
  var article

  beforeEach(() => {
    article = {
      headline: 'This is a headline.',
      id: 0
    }
    list = { articles: [article] }
    view = new ArticleListView(list)
  })

  it('stores a list of articles when instantiated', () => {
    expect(view.articleList).isEqualTo(list)
  })

  it('can render HTML for its article list', () => {
    expect(view.renderListHTML()).isEqualTo("<ul><li><a href='#articles/0'>This is a headline.</a></li></ul>")
  })
})
