function mockNewsListModel () {
  return {};
}
function mockNewsListView (newsList) {
  return { toHTML: function () {return "<div></div>";}};
}
var newsController = new NewsControllerModel(mockNewsListModel, mockNewsListView);
var mockDiv = document.createElement("div");

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
    newsController.renderHTML(mockDiv);
    return (mockDiv.innerHTML === "<div></div>");
  }())
);
