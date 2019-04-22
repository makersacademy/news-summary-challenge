// User story 1: List view
// -----------------------
// As a busy politician,
// so I know what the big stories of the day are,
// I want to see all of today's headlines in one place.

function createsListArrayFromResponse() {
  var testDescription = "createsListArrayFromResponse"
  var articlesList = new ArticlesList()
  console.log(articlesList.returnList())
  assert.isTrue(articlesList.returnList() instanceof Array, testDescription)
}
createsListArrayFromResponse()