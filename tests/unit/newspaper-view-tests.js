(function(exports) {

function checkingInstanceReceivesNewspaper() {
var newspaper = new Newspaper();
var newspaperview = new NewsPaperView(newspaper);
assert.isTrue(newspaperview._newspaper._articleList.length === 0, "Article list view Array")
};

function addsHTMLToArray() {
  var newspaper = new Newspaper();
  newspaper.addArticle("Test article")
  var newspaperview = new NewsPaperView(newspaper);
  var HTMLoutput = newspaperview.returnHTML();
  assert.isTrue(HTMLoutput === "<ul><li><div><a href=#0>Test article</a></div></li></ul>", "Testing adding HTML to array")
};

checkingInstanceReceivesNewspaper(); 
addsHTMLToArray();
})(this);