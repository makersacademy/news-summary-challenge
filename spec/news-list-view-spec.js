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
var noteListHTML = '<h2 id="headline0">Headline 0</h2><img id="image0" src="http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif"><div id="summary0">Summary 0</div><h2 id="headline1">Headline 1</h2><img id="image1" src="http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif"><div id="summary1">Summary 1</div><h2 id="headline2">Headline 2</h2><img id="image2" src="http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif"><div id="summary2">Summary 2</div>';

describe('News list view model',
  assert('initializes with news list', function() {
    return (newsListView.getNewsList() !== undefined);
    }()
  )
);

describe('toHTML',
  assert('renders notelist to HTML', function() {
    return (newsListView.toHTML() === noteListHTML);
    }()
  )
);
