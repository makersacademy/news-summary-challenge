// mockHeadlineListModel is a mock for `new HeadlineList` model

var mockHeadlineListModel = mockHeadlineListModel
var newsController = new NewsController(mockHeadlineListModel);

expect('Note controller can change page html', newsController.getHeadlineHTML('testing')).isEqualTo('<p>testing</p>')