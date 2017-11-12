function mockNewsListModel () {
  return {};
}
function mockNewsListView (newsList) {
  return {};
}
var newsController = new NewsControllerModel(mockNewsListModel, mockNewsListView);

describe('News controller models',
  assert('initializes with a news list', function() {
    return (newsController.getNewsList() !== undefined);
    }()
  ),
  assert('initializes with a news list view', function() {
    return (newsController.getNewsListView() !== undefined);
    }()
  )
);
