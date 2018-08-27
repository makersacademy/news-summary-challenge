var testHeadlineList = new HeadlineList()

expect('New headline list returns initial array', testHeadlineList.getHeadlineListArray()).isEqualTo(testHeadlineList.headlineListArray)

// This is not the best test. It just checks that the array has been populated with something
// I'm not sure how to test whether the text value of the array object is a specific value
testHeadlineList.addHeadlines({webTitle: 'New test headline in test list'})
expect('Add headlines populates headline list', testHeadlineList.getHeadlineListArray().length).isEqualTo(1)