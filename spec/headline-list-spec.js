var testHeadlineList = new HeadlineList()

expect('New headline list returns initial array', testHeadlineList.getHeadlineListArray()).isEqualTo(testHeadlineList.headlineListArray)

// This is not the best test. It just checks that the array has been populated with something
// I'm not sure how to test whether the text value of the array object is a specific value
apiTest = {'response': {'results': [{'webTitle': "Testing: Whatapalaver wow's the techno world", 'webUrl': 'www.whatapalaver.co.uk', 'fields': {'thumbnail': 'www.testimage.co.uk'}}, {'webTitle': "Testing: It rained on Bank Holiday Monday", 'webUrl': 'www.shockhorror.co.uk', 'fields': {'thumbnail': 'www.testimage2.co.uk'}}]}}
testHeadlineList.addHeadlines(apiTest)
expect('Add headlines populates headline list', testHeadlineList.getHeadlineListArray().length).isEqualTo(2)