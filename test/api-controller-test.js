import { APIController } from '../src/controllers/api-controller.js'

describe('An API controller', () => {
  var controller
  var i
  var savedFetch
  beforeEach(() => {
    i = 0
    controller = new APIController()
    savedFetch = window.fetch
  })

  it('uses the fetch method correctly', () => {
    var savedFetch = window.fetch
    window.fetch = args => {
      return {
        then: function() {
          return {
            then: function() {
              i++
            }
          }
        }
      }
    }
    controller.initializeHeadlines()
    window.fetch = savedFetch
    expect(i).isEqualTo(1)
  })

  it('uses the fetch method with a callback', () => {
    var incrementVar = () => {
      i++
    }
    controller.initializeHeadlines(incrementVar)
    setTimeout(() => {
      expect(i).isEqualTo(1)
    }, 500)
  })
})
