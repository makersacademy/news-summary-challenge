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

    controller.initializeSummary(`http://testurl.com`)
    expect(passedURL).isEqualTo(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://testurl.com`)
    expect(i).isEqualTo(1)
  })

  it('can set summary information on articles', () => {
    var summary = 'This is a sentence. This is a second sentence.'
    controller.setSummaryInformation(controller.articleList.articles[0], summary)
    expect(controller.articleList.articles[0].summary).isEqualTo(summary)
  })
})
