describe('NewsController', function() {
  it('initialises with a list of articles', function() {
    let newsArticleList = {};
    let newsController = new NewsController(newsArticleList);

    expect(newsController.list).toEqual(newsArticleList);
  });

  it('displays headlines on page', function() {
    let newsArticleListDouble = {
      convertToHTML: function () {
        return htmlString;
      }
    };
    let htmlString = 
      '<ul>' +
        '<li id="1">' +
          '<a href="#articles/1">' +
           '<h3>England win World Cup</h3>' +
          '</a>' +
        '</li>' +
        '<li id="2">' +
          '<a href="#articles/2">' +
            '<h3>Queen rides pony</h3>' +
          '</a>' +
        '</li>' +
      '</ul>';    

    let element = {};
    let newsController = new NewsController(newsArticleListDouble);
    
    newsController.renderHeadlines(element);
    expect(element.innerHTML).toEqual(htmlString);
  });


});