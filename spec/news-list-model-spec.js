describe('News list model',
  assert('initializes with three news stories', function() {
    function mockNewsStoryModel () {
      return {};
    }
    var newsList = new NewsListModel(mockNewsStoryModel);
    return (newsList.getNewsStories().length === 3);
    }()
  )
);
