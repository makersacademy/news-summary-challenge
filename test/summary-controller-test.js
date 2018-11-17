import { SummaryController } from '../src/controllers/summary-controller.js'

describe('A summary controller', () => {
  var controller
  var articleList
  var passedURL
  var json
  var response

  beforeEach(() => {
    articleList = {
      articles: [{
        headline: 'This is a headline.',
        summary: 'This is a summary.',
        image: 'This is an image.',
        url: 'https://test.com',
        id: 0 }]
    }

    passedURL = null
    json = { text: 'Test', sentences: { join: () => 'Test successful' } }
    response = { json: () => { return json; } }

    controller = new SummaryController(articleList)
  })

  it('is instantiated with an article list', () => {
    expect(controller.articleList).isEqualTo(articleList)
  })

  it('has no summary view object when instantiated', () => {
    expect(controller.summaryView).isEqualTo(null)
  })

  it('gets a summary using the fetch method correctly', () => {
    var i = 0
    var savedFunctionState = window.fetch
    window.fetch = url => {
      passedURL = url
      return new Promise(resolve => {
        i++
        resolve(response)
      })
    }
    let callback = () => {}

    controller.summaryView = { article: articleList.articles[0], renderSummaryHTML: () => null }
    controller.getSummary(controller.summaryView.article.url)
    expect(passedURL).isEqualTo(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${controller.summaryView.article.url}`)
    expect(i).isEqualTo(1)
  })

  it('can set summary information on articles', () => {
    var summary = 'This is a sentence. This is a second sentence.'
    controller.summaryView = { article: articleList.articles[0] }
    controller.setSummaryInformation(summary)
    expect(controller.summaryView.article.summary).isEqualTo(summary)
  })

  it('can find an article by its ID', () => {
    controller.findArticleByID('0')
    expect(controller.summaryView.article).isEqualTo(articleList.articles[0])
  })

  it('renders HTML for an article summary', () => {
    var html = '<article>This is an image.<h2>This is a headline.</h2><p>This is a summary.</p></article>'
    controller.summaryView = {
      renderSummaryHTML: () => { return html }
    }

    controller.renderSummaryHTML()

    expect(document.getElementById('content').innerHTML).isEqualTo(html)
  })

  it('initializes a summary using its other methods', () => {
    var passedID = null

    controller.findArticleByID = id => {
      passedID = id
    }
    controller.getSummary = url => {
      passedURL = url
    }
    controller.summaryView = { article: articleList.articles[0] }

    controller.initializeSummary('0')

    expect(passedID).isEqualTo('0')
    expect(passedURL).isEqualTo('https://test.com')
  })
})
