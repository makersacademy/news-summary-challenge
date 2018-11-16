import { APIController } from '../src/controllers/api-controller.js'

describe('An API controller', () => {
  var controller
  var passedURL
  var json
  var response
  var i

  beforeEach(() => {
    i = 0
    passedURL = null
    json = { text: 'Test', response: { results: null }}
    response = { json: () => { return json; } }
    controller = new APIController()
  })

  it('initiailizing headlines uses the fetch method correctly', () => {
    window.fetch = url => {
      passedURL = url
      return new Promise(resolve => {
        i++
        resolve(response)
      })
    }
    let callback = () => {}

    controller.initializeHeadlines(callback)

    expect(i).isEqualTo(1)
  })
})
