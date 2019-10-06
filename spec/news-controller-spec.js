function testNewsControllerReturnHTML(){
    try {
        let articleList = new ArticleList();
        let newsController = new NewsController(articleList);

        console.log(newsController.insertHTMLToApp())
        assert.isTrue(newsController.insertHTMLToApp() === "abcde")
    }
    catch(err) {
        return "Error - " + arguments.callee.name + " : " + err;
    }
    return "Pass - " + arguments.callee.name;
}
