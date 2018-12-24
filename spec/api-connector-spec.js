'use strict';

var apiConnector = new ApiConnector

var api = {"response":{"status":"ok","headline":"news headline"}}

tea.describe('api connector', function() {
  tea.it('returns news articles', function() {
    var expected = {"response":{"status":"ok","headline":"news headline"}};
    var result = apiConnector.connect()
    console.log(result)
    tea.check(expected === result)
  })
})
