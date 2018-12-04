import { SummaryController } from '../src/controllers/summary-controller.js'

describe('A summary controller', () => {
  var controller
  var articleList

  beforeEach(() => {
    articleList = {
      articles: [{
        headline: 'This is a headline.',
        summary: 'This is a summary.',
        image: 'This is an image.',
        url: 'https://test.com',
        id: 0 }]
    }

    controller = new SummaryController(articleList)
  })

  it('is instantiated with an article list', () => {
    expect(controller.articleList).isEqualTo(articleList)
  })

  it('has no summary view object when instantiated', () => {
    expect(controller.summaryView).isEqualTo(null)
  })

  it('can get its summary URL correctly', () => {
    controller.summaryView = { article: articleList.articles[0] }
    expect(controller.getSummaryURL()).isEqualTo('https://test.com')
  })

  it('can find an article by its ID', () => {
    controller.findArticleByID('0')
    expect(controller.summaryView.article).isEqualTo(articleList.articles[0])
  })

  it('renders HTML for an article summary', () => {
    var html = '<article>This is an image.<h2>This is a headline.</h2><p>This is a summary.</p></article>'
    controller.summaryView = {
      renderSummaryHTML: () => { return html },
      article: { summary: null }
    }

    controller.renderSummary('This is a summary.')
    expect(controller.summaryView.article.summary).isEqualTo('This is a summary.')
    expect(document.getElementById('content').innerHTML).isEqualTo(html)
  })
})
