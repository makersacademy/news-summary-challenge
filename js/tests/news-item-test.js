function testNewsItemInstanciation(){
    var newsItem = new NewsItem("test title", "test link", "test summary", "test image");
    
    assert.isTrue(newsItem.title === "test title", "news item has title");
    assert.isTrue(newsItem.link === "test link", "news item has link");
    assert.isTrue(newsItem.summary === "test summary", "news item has summary");
    assert.isTrue(newsItem.image === "test image", "news item has image");
}

function testNewsItemDisplay(){
    var newsItem = new NewsItem("test title", "test link", "test summary", "test image");
    var newsItemDisplay = newsItem.display();
    assert.isTrue(newsItemDisplay[0] === "test title", "news item display has title");
    assert.isTrue(newsItemDisplay[1] === "test link", "news item display has link");
    assert.isTrue(newsItemDisplay[2] === "test summary", "news item display has summary");
    assert.isTrue(newsItemDisplay[3] === "test image", "news item display has image");
}

// testNewsItemInstanciation();
// testNewsItemDisplay();