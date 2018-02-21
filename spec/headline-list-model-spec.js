function testInitializedHeadlineList() {
  var headlineList = new HeadlineList();

  assert.isTrue(headlineList.headlines.length === 0, "Headline List is initialized with an empty array of headlines");
};
testInitializedHeadlineList();

function testGetHeadlines() {
  var headlineList = new HeadlineList();
  headlineList.createHeadline("Headline 2", "url", "thumbnail");

  assert.isTrue(headlineList.getHeadlines() === headlineList.headlines, "'getHeadlines' returns the headlines array");
};
testGetHeadlines();

function testAddHeadline() {
  var headlineList = new HeadlineList();
  var headline = new Headline("Headline 2", "url", "thumbnail");
  headlineList.addHeadline(headline);

  assert.isTrue(headlineList.headlines.length === 1, "'addHeadline' pushes the headline into the headlines array");
};
testAddHeadline();

function testCreateHeadline() {
  var headlineList = new HeadlineList();
  headlineList.createHeadline("Headline 2", "url", "thumbnail");

  assert.isTrue(headlineList.headlines.length === 1, "'createHeadline' creates and adds an headline to the headlines array");
};
testCreateHeadline();

function testGetHeadlineById() {
  var headlineList = new HeadlineList();
  var headline1 = new Headline("Headline 1", "url1", "thumbnail1");
  var headline2 = new Headline("Headline 2", "url2", "thumbnail2");
  headlineList.addHeadline(headline1);
  headlineList.addHeadline(headline2);

  assert.isTrue(headlineList.getHeadlineById(4) === headline2, "headline can be retrieved by ID")
}
testGetHeadlineById()
