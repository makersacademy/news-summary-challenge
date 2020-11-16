// let articleController = new ArticleController("mockAPI", articleListMock)

// it('can be instantiated', function(){
//   expect(articleController).toBeAnInstanceOf(ArticleController)
// })

// these tests do not actually test the note controller as it currently runs and takes from guardian API

it('changes inner HTML of app div to headline list', function(){
  articleControllerMock.renderCurrentArticles()
  console.log(document.getElementById("app").innerHTML)
  expect(document.getElementById("app").innerHTML).toEqual(`<ul style="list-style-type:none"><li><div class="newsheadlineclass"><img class="image" src="corona1.img" alt="The News Today"><a id="headline" href="#articles/0">Corona scare 1</a></div></li><li><div class="newsheadlineclass"><img class="image" src="corona2.img" alt="The News Today"><a id="headline" href="#articles/1">Corona scare 2</a></div></li></ul>`)
})

it('displays webURL when you click on link', function(){
  articleControllerMock.renderCurrentArticles()
  articleControllerMock.renderSummary(0)
  expect(document.getElementById("app").innerHTML).toEqual(`<div id="summary">summary of corona scare 1</div>`)
})
