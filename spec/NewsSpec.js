var stub = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
var newspaper = new News(stub);

it("should contain a list of articles which are created every time the News Class is created", function(){
  console.log(newspaper.articleList)
  expect(newspaper.__proto__.articleList.length).toEqual(10);
  expect(newspaper.__proto__.articleList[0]).toBeInstanceof(Article)
})

it("should return the headline in html", function(){
  var Headlines = newspaper[0].printHeadlines
  expect(Headlines).toEqual("something fixed")
})

