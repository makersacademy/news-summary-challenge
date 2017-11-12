function mockNewsListModel () {
  return {};
}
function mockNewsListView (newsList) {
  return { toHTML: function () {return "<div></div>";}};
}
var mockDiv = document.createElement("div");
var newsController = new NewsControllerModel(mockNewsListModel, mockNewsListView, mockDiv);

describe('News controller models',
  assert('initializes with a news list', function() {
    return (newsController.getNewsList() !== undefined);
    }()),
  assert('initializes with a news list view', function() {
    return (newsController.getNewsListView() !== undefined);
    }())
);
describe('renderHTML',
  assert('inserts HTML into index', function() {
    return (mockDiv.innerHTML === "<div></div>");
  }())
);
