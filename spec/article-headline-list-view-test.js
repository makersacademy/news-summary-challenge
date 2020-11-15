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
  expect(articleHeadlineListView.returnHTML()).toEqual("<ul><li><a href='#articles/0'>Corona scare 1</a></li><li><a href='#articles/1'>Corona scare 2</a></li></ul>")
})