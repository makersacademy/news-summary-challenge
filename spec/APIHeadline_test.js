function testAPIHeadline()  {
  api = new APIHeadline()
  api.data = APITestOutput()
  api.getHeadlines()

  testapi = APITestOutput()
  
  assert.isTrue('Takes API response and stores headlines',
     api.allHeadlines()[0] === testapi[0]['webTitle'] )
}
testAPIHeadline()