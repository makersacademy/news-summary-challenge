// mocking 
  // let headline1 = {
  //   title: function () {
  //     return 'Corona scare 1';
  //   }
  // }
  // let headline2 = {
  //   title: function () {
  //     return 'Corona scare 2';
  //   }
  // }
  // let headlines = [headline1.title(), headline2.title()]

  // let myHeadlineList = {
  //   returnHeadlines: function () {
  //     return headlines
  //   }
  // }
  
let articleHeadlineListViewMock = {
  returnHTML: function(){
    return "<ul><li><div>Corona scare 1</div></li><li><div>Corona scare 2</div></li></ul>"
  }
}

let articleController = new ArticleController(articleHeadlineListViewMock) 

it('can be instantiated', function(){
  expect(articleController).toBeAnInstanceOf(ArticleController)
})

it('changes inner HTML of app div to headline list', function(){
  articleController.renderHeadlines()
  expect(document.getElementById("app").innerHTML).toEqual("<ul><li><div>Corona scare 1</div></li><li><div>Corona scare 2</div></li></ul>")
})