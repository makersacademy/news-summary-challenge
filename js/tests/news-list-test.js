function testNewsListIntanciation(){
    newsList = new NewsList();
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

function testNewsListHTMLWrap(){
    newsList = new NewsList();
    newsList.create("test title", "test link", "test summary", "test image");
    htmlWrap = newsList.htmlWrap();
    assert.isTrue(htmlWrap === "<p><img src=test image></p><p><a href='test link' target='_blank'>test title</a><br>test summary</p>", "news list htmlWrap")
}

 testNewsListIntanciation();
 testNewsListCreate();
 testNewsListHTMLWrap();