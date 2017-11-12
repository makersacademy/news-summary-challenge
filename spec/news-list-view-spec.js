describe('News list view model',
  assert('initializes with news list', function() {
    function mockNewsListModel () {
      return {};
    }
    var newsListView = new NewsListViewModel(mockNewsListModel);
    return (newsListView.getNewsList() !== undefined);
    }()
  )
);
