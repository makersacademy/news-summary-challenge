function testStartsEmpty() {
  var headlineList = new HeadlineList();
  assert.isTrue(headlineList.LIST.length === 0 , 'list of headlines begins empty')
};
testStartsEmpty();

function canAddHeadlines(){
  var headlineList = new HeadlineList();
  var headline = new Headline('Title', 'Body', 'Image URL')
  headlineList.addheadline(headline)
  assert.isTrue(headlineList.LIST.length === 1, 'Headlines are addded to the right place')
  assert.isTrue(headlineList.LIST[0].TITLE === 'Title', 'Title is stored')
  assert.isTrue(headlineList.LIST[0].BODY === 'Body', 'Body is stored')
  assert.isTrue(headlineList.LIST[0].IMAGE === 'Image URL', 'Image URL is stored')
}

canAddHeadlines();
