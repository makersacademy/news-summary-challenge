'use strict';

var apiConnector = new ApiConnector()

tea.describe('api connector', function() {
  tea.it('returns an array of 10 items', function() {
    var expected = 10;
    var result = apiConnector.getData();
    tea.check(result.length === expected)
  })
})
