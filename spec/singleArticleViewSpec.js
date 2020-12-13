console.log("Single article view tests")
console.log("--------------------")

fakeArticle = {
  getThumbnail: function() {
    return "link_to_image";
  },
  getHeadline: function() {
    return "Big Breaking Headline News!!";
  }
}

let fakeArticleBody = "Some arbitrarily long piece of text, but much much shorter than a real article will ever be";

mySingleArticleView = new SingleArticleView(fakeArticle, fakeArticleBody);

it("Is an instance of the SingleArticleView class", function() {
  expect(true).toEqual(mySingleArticleView instanceof SingleArticleView);
})

it("Returns the expected html", function() {
  let expectedResponse = "<div id=\"container\"><h2>Big Breaking Headline News!!</h2><br><img src=\"link_to_image\" alt=\"Big Breaking He\"><br>Some arbitrarily long piece of text, but much much shorter than a real article will ever be</div>";
  expect(expectedResponse).toEqual(mySingleArticleView.getHTML());
})
