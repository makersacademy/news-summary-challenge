var todaysNews = new TodaysNews("test");
var printer = new ArticlePrinter();
var newsController = new NewsController(todaysNews, printer);
newsController.run();
