(function (exports) {

var NewsDouble = function (news) {
  this.news = news;
};

var newsArticleDouble = function () {
  this.addNews = function (news) {
    return "test news";
  }
}

var newsArticleViewDouble = function () {
  this.converToHTML = function () {
    return "test news";
  }
};

function testNewsControllerCanBeInstantiated() {
  var newsController = new NewsController(newsArticleDouble);
  console.log("%c testNewsControllerCanBeInstantiated", 'color: #8930e8');
  assert.isTrue(newsController);
};

function testgetHTMLToPage() {
  var newsController = new NewsController(newsArticleDouble, newsArticleViewDouble);
  var htmlElement = document.getElementById("app");
  newsController.getHTMLToPage();
  console.log("%c testgetHTMLToPage", 'color: #8930e8');
  assert.isTrue(htmlElement.innerHTML === "test news");
};

testNewsControllerCanBeInstantiated();
testgetHTMLToPage();
}) (this)