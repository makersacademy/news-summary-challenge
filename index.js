var controller = new ListController(new List());

// controller.addArticle(
//   "HEADLINE 1",
//   "CONTENT, blah, blah, blah",
//   "Author ",
//   "18-10-2020",
//   "test image ./images/4928.jpg"
// );

// controller.addArticle(
//   "Headline 2 - Everything is going to shit",
//   "Scientists say 'Yup, everything is going to shit'",
//   "Barry White",
//   "18-10-2020",
//   "./images/4529.jpg"
// );

controller.makeApiRequest("http://content.guardianapis.com/search?q=headlines");

controller.insertListHTML(document.getElementById("headlines")); //element =

controller.makeURLChangeShowArticleContent();
