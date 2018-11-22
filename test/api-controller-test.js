import { APIController } from '../src/controllers/api-controller.js'

describe('An API controller', () => {
  var controller
  var headlinesController

  beforeEach(() => {
    headlinesController = {}
    controller = new APIController
  })

  it('gets headlines using the fetch method correctly', () => {
    var i = 0
    var json = { text: 'Test', response: { results: 'Test successful' } }
    var response = { json: () => { return json } }

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
})
