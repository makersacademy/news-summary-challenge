function testHeadlineInitializes() {
  var headline = new Headline('Title', 'This is the body of text', 'This is the image URL');
  assert.isTrue(headline.TITLE === 'Title');
  assert.isTrue(headline.BODY === 'This is the body of text');
  assert.isTrue(headline.IMAGE === 'This is the image URL');
};
testHeadlineInitializes();
