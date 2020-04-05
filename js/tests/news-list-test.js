function testNewsListIntanciation(){
    // function NewsItemDouble(){
    //     this.title = "test title"
    //     this.link = "test link"
    //     this.summary = "test summary"
    //     this.image = "test image"
    // }

    // newsItem = new NewsItemDouble
    newsList = new NewsList();

    // assert.isTrue(newsList.newsItem.title === "test title", "news item in list has title");
    // assert.isTrue(newsList.newsItem.link === "test link", "news item in list has link");
    // assert.isTrue(newsList.newsItem.summary === "test summary", "news item in list has summary");
    // assert.isTrue(newsList.newsItem.image === "test image", "news item in list has image");
    assert.isTrue(newsList.list.length === 0, "news list is empty on instanciation");
}

function testNewsListCreate(){
    newsList = new NewsList();
    newsList.create("test title", "test link", "test summary", "test image");
    assert.isTrue(newsList.list.length === 1, "news list has one item");
    assert.isTrue(newsList.list[0].title === "test title", "news list item 0 has title");
    assert.isTrue(newsList.list[0].link === "test link", "news list item 0 has link");
    assert.isTrue(newsList.list[0].summary === "test summary", "news list item 0 has summary");
    assert.isTrue(newsList.list[0].image === "test image", "news list item 0 has image");
}

testNewsListIntanciation();
testNewsListCreate();