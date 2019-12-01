function testReturnEmptyHTML() {
  var headlineList = new HeadlineList;
  var headlineView = new HeadlineView(headlineList);
  eval.isTrue(headlineView.returnHTML() === "<ul></ul>");
};
testReturnEmptyHTML();

function testReturnOneHTML() {
  var headlineList = new HeadlineList;
  var headline = new Headline("English man does a shop", "He was in tesco, buying a meal deal no less", "Link to Image" );
  headlineList.addHeadline(headline);
  var headlineView = new HeadlineView(headlineList);
  eval.isTrue(headlineView.returnHTML() === "<ul><li><div>" + headline.title + "<br></br>" + headline.article + "<br></br>" + headline.image + "</div></li><br></br></ul>");
};
testReturnOneHTML();

function testReturnMultipleHTML() {
  var headlineList = new HeadlineList;
  var headline1 = new Headline("English man does a shop", "He was in tesco, buying a meal deal no less", "Link to Image" );
  var headline2 = new Headline("A Woman takes a dog on a walk", "The dog has absolutely outdone itself with that massive...", "Link to dog image");
  headlineList.addHeadline(headline1);
  headlineList.addHeadline(headline2);
  var headlineView = new HeadlineView(headlineList);
  eval.isTrue(headlineView.returnHTML() === "<ul><li><div>" + headline1.title + "<br></br>" + headline1.article + "<br></br>" + headline1.image + "</div></li><br></br><li><div>" + headline2.title + "<br></br>" + headline2.article + "<br></br>" + headline2.image + "</div></li><br></br></ul>");
};
testReturnMultipleHTML();
