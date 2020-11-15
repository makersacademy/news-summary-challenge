// mocking:
  let headline1 = {
    title: function () {
      return 'Corona scare 1';
    }
  }
  let headline2 = {
    title: function () {
      return 'Corona scare 2';
    }
  }
  let headlines = [headline1.title(), headline2.title()]

  let myHeadlineList = {
    returnHeadlines: function () {
      return headlines
    }
  }

let articleHeadlineListView = new ArticleHeadlineListView(myHeadlineList)

it('can be instantiated', function(){
  expect(articleHeadlineListView).toBeAnInstanceOf(ArticleHeadlineListView)
})

it('returns html string of ArticleList model array', function(){
  console.log(articleHeadlineListView.returnHTML())
  expect(articleHeadlineListView.returnHTML()).toEqual("<ul><li><div>Corona scare 1</div></li><li><div>Corona scare 2</div></li></ul>")
})