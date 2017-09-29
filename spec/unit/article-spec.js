var data = {
  title: "News of something interesting",
  content: "Detail on news of something interesting",
  thumbnail: "",
  url: "www.NotTheDailyMail.com"
}

it("Article model: should have title", function(){
  var article1 = new Article(data);
  return expect(article1.title()).toEqual(data.title);
});

it("Article model: should have a thumbnail", function(){
  var article1 = new Article(data);
  return expect(article1.thumbnail()).toEqual(data.thumbnail);
});

it("Article model: should have content", function(){
  var article1 = new Article(data);
  return expect(article1.content()).toEqual(data.content);
});

it("Article model: should have the URL to the source", function(){
  var article1 = new Article(data);
  return expect(article1.url()).toEqual(data.url);
});
