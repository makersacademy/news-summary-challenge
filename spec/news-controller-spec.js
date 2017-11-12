describe('News controller models',
  assert('initializes with a news list', function() {
    function mockNewsListModel () {
      return {};
    }
    var newsController = new NewsControllerModel(mockNewsListModel);
    return (newsController.getNewsList() !== undefined);
    }()
  )
);
