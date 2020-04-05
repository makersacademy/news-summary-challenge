function testNewsListIntanciation(){
    function NewsItemDouble(){
        this.title = "test title"
        this.link = "test link"
        this.summary = "test summary"
        this.image = "test image"
    }

    newsItem = new NewsItemDouble
    newsList = new NewsList(newsItem);

    assert.isTrue(newsList.newsItem.title === "test title", "news item in list has title");
    assert.isTrue(newsList.newsItem.link === "test link", "news item in list has link");
    assert.isTrue(newsList.newsItem.summary === "test summary", "news item in list has summary");
    assert.isTrue(newsList.newsItem.image === "test image", "news item in list has image");
}

testNewsListIntanciation();