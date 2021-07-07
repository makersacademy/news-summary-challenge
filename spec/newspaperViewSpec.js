describe("newspaperView", function() {
  var articleDouble = {
    showHeadline: "some headline",
    showURL: "www.example.com"
  };

  var view = new ArticleTemplate;
  var page = view.createLink(articleDouble);

  it('turns the headline information into html', function() {
    console.log(jotun.expect(page).includesObject('<div id="headline">some headline</div>'));
  });

  it('turns the url information into html', function() {
    console.log(jotun.expect(page).includesObject('<div id="url"><a href="www.example.com">Read article</a></div>'));
  });
});
