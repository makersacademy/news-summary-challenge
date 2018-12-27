'use strict';

var apiConnector = new ApiConnector()

tea.describe('api connector', function() {
  tea.it('connects to an api and stores reponse in an array', function() {
    apiConnector.connect('../news-summary-challenge/mock-api.json');
    tea.check(apiConnector.dataStore.length > 0, true)
  })

  tea.it('returns data in an array', function() {
    apiConnector.connect('../news-summary-challenge/mock-api.json');
    var result = apiConnector.getData()
    tea.check(result.constructor === Array, true)
  })
})
