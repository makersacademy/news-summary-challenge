var mockNewsListModel = {
  getNewsStories: function () { return [mockNewsStoryModel(0), mockNewsStoryModel(1), mockNewsStoryModel(2)]; }
};

function mockNewsStoryModel(num) {
  return  {
          getHeadline: function () {return "Headline "+ num;},
          getSummary:   function () {return "Summary " + num;},
          getImgUrl:    function () {return "http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif";}
          };
}

var newsListView = new NewsListViewModel(mockNewsListModel);
var newsListHTML = '<a id="headline0" href="/#/story/0">Headline 0</a><img id="image0" src="http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif"><a id="headline1" href="/#/story/1">Headline 1</a><img id="image1" src="http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif"><a id="headline2" href="/#/story/2">Headline 2</a><img id="image2" src="http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif">';

var singleStoryHTML = '<img id="image0" src="http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif"><h2 id="headline0">Headline 0</h2><div id="summary0">Summary 0</div><a id="back" href="/">Back</a>';

describe('News list view model',
  assert('initializes with news list', function() {
    return (newsListView.getNewsList() !== undefined);
    }()
  )
);

describe('toHTML',
  assert('renders newslist to HTML', function() {
    return (newsListView.toHTML("0") === newsListHTML);
    }()
  )
);

describe('singleStoryHTML',
  assert('renders single story view to HTML', function() {
    return (newsListView.singleStoryHTML(0) === singleStoryHTML);
    }()
  )
);
