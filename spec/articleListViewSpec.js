console.log("Article list view tests")
console.log("--------------------")

let fakeArticle1 = {
  getThumbnail: function() {
    return "link_to_image1";
  },
  getHeadline: function() {
    return "Big Breaking Headline News!!";
  }
}

let fakeArticle2 = {
  getThumbnail: function() {
    return "link_to_image2";
  },
  getHeadline: function() {
    return "Slightly smaller news";
  }
}

let fakeArticle3 = {
  getThumbnail: function() {
    return "link_to_image3";
  },
  getHeadline: function() {
    return "Footballer gets haircut";
  }
}

let fakeArticleList = {
  getAllArticles: function() {
    return [fakeArticle1, fakeArticle2, fakeArticle3];
  }
}

let myArticleListView = new ArticleListView(fakeArticleList);

it("Is an instance of the ArticleListView class", function() {
  expect(true).toEqual(myArticleListView instanceof ArticleListView);
})

it("Returns the expected html", function() {
  let expectedResponse = "<ul style=\"list-style-type:none\"><li><div class=\"container\"><img class=\"image\" src=\"link_to_image1\" alt=\"Big Breaking He\"><br><a id=\"headline\" href='#articles/0'>Big Breaking Headline News!!</a></div></li><br><li><div class=\"container\"><img class=\"image\" src=\"link_to_image2\" alt=\"Slightly smalle\"><br><a id=\"headline\" href='#articles/1'>Slightly smaller news</a></div></li><br><li><div class=\"container\"><img class=\"image\" src=\"link_to_image3\" alt=\"Footballer gets\"><br><a id=\"headline\" href='#articles/2'>Footballer gets haircut</a></div></li><br></ul>";
  expect(expectedResponse).toEqual(myArticleListView.getHTML());
})
