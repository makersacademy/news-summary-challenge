var doubleArticleData = {
apiUrl : "https://content.guardianapis.com/tv/miranda",
fields : {body  : `<p>This year felt different. <img src="https://media.jpg" alt="Steve" width="1000" height="710" class="gu-image" /></p>`},
webTitle : "Miranda Sawyer’s best radio of 2017",
webUrl : "https://www.theguardian.com/tv/miranda",
}

var doubleArticleSum = {
  text: "The talk I released today is called",
  sentences: ["talk","released"]

}

var doubleArticleDataWithNoImage = {
apiUrl : "",
fields : {body  : ``},
webTitle : "",
webUrl : "",
}

var article = new Article(doubleArticleData, doubleArticleSum);

var articleTwo = new Article(doubleArticleDataWithNoImage, doubleArticleSum);

function testInstance(){
  var description = "ArticleModel can be instantiated";
  var assertion = article instanceof Article;
  assert.isTrue(description, assertion);
}

testInstance();

function testTitle(){
  var description = "ArticleModel receive article data and return title";
  var assertion = article.title() === "Miranda Sawyer’s best radio of 2017";
  assert.isTrue(description, assertion);
}

testTitle();

function testApiUrl(){
  var description = "ArticleModel return the api url";
  var assertion = article.apiUrl() === "https://content.guardianapis.com/tv/miranda";
  assert.isTrue(description, assertion);
}

testApiUrl();

function testWebUrl(){
  var description = "ArticleModel return the web url";
  var assertion = article.webUrl() === "https://www.theguardian.com/tv/miranda";
  assert.isTrue(description, assertion);
}

testWebUrl();

function testImage(){
  var description = `ArticleModel return image tag from the article.`;
  var assertion = article.img() === `<img src="https://media.jpg" alt="Steve" width="1000" height="710" class="gu-image" />`;
  assert.isTrue(description, assertion);
}

testImage();

function testNoImage(){
  var description = `ArticleModel return "No image Found"`;
  var assertion = articleTwo.img() === "No image Found";
  assert.isTrue(description, assertion);
}

testNoImage();

function testId(){
  var description = "ArticleModel return unique Id";
  var assertion = articleTwo.id() === 2;
  assert.isTrue(description, assertion);
}

testId();

function testText(){
  var description = "ArticleModel return text";
  var assertion = article.text() === "The talk I released today is called";
  assert.isTrue(description, assertion);
}

testText();
function testSummary(){
  var description = "ArticleModel return summary";
  var assertion = article.summary() === "talk<br>released";
  assert.isTrue(description, assertion);
}

testSummary();
