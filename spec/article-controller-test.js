// need to extract mocking to another file
let articleController = new ArticleController(headlineListMock)
let articleControllerFeature = new ArticleController 

it('can be instantiated', function(){
  expect(articleController).toBeAnInstanceOf(ArticleController)
})

it('changes inner HTML of app div to headline list', function(){
  articleController.renderHeadlines(articleHeadlineListViewMock)
  expect(document.getElementById("app").innerHTML).toEqual("<ul><li><div>Corona scare 1</div></li><li><div>Corona scare 2</div></li></ul>")
})

it('reveals summary when link of related header is clicked', function(){
  // passing as a feature test
  // need to make articleSummaryView receive .returnHTML and output "<div>summary of corona scare 1</div>"
  articleControllerFeature.renderHeadlines()
  articleControllerFeature.renderSummary(0)
  console.log(document.getElementById("app"))
  expect(document.getElementById("app").innerHTML).toEqual("<div>Test Summary</div>")
})