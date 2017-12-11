const newspaperController = new NewspaperController (new HttpRequestController (apiKey() ));

newspaperController.eventLoadArticles();
newspaperController.eventOpenArticle();
newspaperController.eventCollapseArticles();
