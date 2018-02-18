var todaysNews = new TodaysNews()
todaysNews.run();
var printer = new ArticlePrinter();
var newsController = new NewsController(todaysNews, printer);
newsController.run();
