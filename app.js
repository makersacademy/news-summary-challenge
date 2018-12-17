window.addEventListener('load', function() {

    //create a note-list-model, with a note
    var newsList = new NewsList();
    //creatte the list view
    var newsListView = new NewsListView(newsList);
    // var NewsView = new NewsView(News);
    var controller = new NewsController(newsList, newsListView);
    //render the list view
    var html = newsListView.render();
    controller.render(html);
});