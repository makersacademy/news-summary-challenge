import { APIController } from '../src/controllers/api-controller.js'

describe('An API controller', () => {
  var controller
  var headlinesController
  var summaryController
  var json
  var response

  beforeEach(() => {
    json = {
      text: 'Test',
      response: { results: 'Test successful' },
      sentences: { join: () => { 'Test successful' } }
    }
    response = { json: () => { return json } }
    headlinesController = {}
    summaryController = {}
    controller = new APIController()
  })

  it('initiializes headlines using the fetch method correctly', () => {
    var i = 0

    window.fetch = url => {
      return new Promise(resolve => {
        i++
        resolve(response)
      })
    }

    headlinesController.setHeadlinesInformation = jsonResults => {
      i++
    }
    headlinesController.renderHeadlinesHTML = () => {
      i++
    }

    controller.initializeHeadlines(headlinesController)

    setTimeout(() => {
      expect(i).isEqualTo(3)
    }, 50)
  })

  it('initializes a summary using the fetch method correctly', () => {
    var i = 0
    var summaryURL = 'https://test.com'
    var passedURL = null

    window.fetch = url => {
      passedURL = url
      return new Promise(resolve => {
        i++
        resolve(response)
      })
    }

    summaryController.renderSummary = jsonSentences => {
      i++
    }
    controller.initializeSummary(summaryURL, summaryController)
    expect(passedURL).isEqualTo(`https://cors-anywhere.herokuapp.com/https://api.aylien.com/api/v1/summarize?url=${summaryURL}`)
    setTimeout(() => {
      expect(i).isEqualTo(2)
    }, 50)
  })
})
