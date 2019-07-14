async function fullTestOfApiHeadlinesReturn () {
  var testName = 'test that the return is an array of objects'
  var api = new ApiCall()
  var result = await api.getHeadlines()
  assert.isTrue(result.length > 0, testName)
}
// this is a full test of api. Use only if neccesary

// fullTestOfApiHeadlinesReturn()
