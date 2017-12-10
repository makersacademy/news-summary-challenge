var doubleArticleData = {
apiUrl : "https://content.guardianapis.com/tv/miranda",
fields : {body  : `<p>This year felt different. <img src="https://media.jpg" alt="Steve" width="1000" height="710" class="gu-image" /></p>`},
webTitle : "Miranda Sawyer’s best radio of 2017",
webUrl : "https://www.theguardian.com/tv/miranda",
}

var doubleArticleDataWithNoImage = {
apiUrl : "https://content.guardianapis.com/tv/miranda",
fields : {body  : `<p>This year felt different.</p>`},
webTitle : "Miranda Sawyer’s best radio of 2017",
webUrl : "https://www.theguardian.com/tv/miranda",
}

function testInstance(){
  var description = "ArticleModel can be instantiated";
  var article = new Article(doubleArticleData);
  var assertion = article instanceof Article;
  assert.isTrue(description, assertion);
}

testInstance();

function testTitle(){
  var description = "ArticleModel receive article data and return title";
  var article = new Article(doubleArticleData);
  var assertion = article.title() === "Miranda Sawyer’s best radio of 2017";
  assert.isTrue(description, assertion);
}

testTitle();

function testApiUrl(){
  var description = "ArticleModel return the api url";
  var article = new Article(doubleArticleData);
  var assertion = article.apiUrl() === "https://content.guardianapis.com/tv/miranda";
  assert.isTrue(description, assertion);
}

testApiUrl();

function testWebUrl(){
  var description = "ArticleModel return the web url";
  var article = new Article(doubleArticleData);
  var assertion = article.webUrl() === "https://www.theguardian.com/tv/miranda";
  assert.isTrue(description, assertion);
}

testWebUrl();

function testImage(){
  var description = `ArticleModel return image tag from the article.`;
  var article = new Article(doubleArticleData);
  var assertion = article.img() === `<img src="https://media.jpg" alt="Steve" width="1000" height="710" class="gu-image" />`;
  assert.isTrue(description, assertion);
}

testImage();

function testNoImage(){
  var description = `ArticleModel return "No image Found"`;
  var article = new Article(doubleArticleDataWithNoImage);
  var assertion = article.img() === "No image Found";
  assert.isTrue(description, assertion);
}

testNoImage();

function testId(){
  var description = "ArticleModel return unique Id";
  var article = new Article(doubleArticleDataWithNoImage);
  var assertion = article.id() === 7;
  assert.isTrue(description, assertion);
}

testId();
