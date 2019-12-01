function testReturnsHtmlWithOneItem() {
    var listOne = [{webTitle: "one", webUrl: "test"}];
    var listView = new ListView(listOne)
    console.log(listView.displayHtml() )
    assert.isTrue(listView.displayHtml() === "<ul><li><div><a id='single-news-item' href='test'>one</a></div></li></ul>");
    console.log("test 1 passed")
}

// testReturnsHtmlWithOneItem() 

function testReturnsHtmlWithTwoItems() {
    var listOne = [{webTitle: "one", webUrl: "test"}, {webTitle: "two", webUrl: "test"}];
    var listView = new ListView(listOne)
    assert.isTrue(listView.displayHtml() === "<ul><li><div><a id='single-news-item' href='test'>one</a></div></li><li><div><a id='single-news-item' href='test'>two</a></div></li></ul>");
    console.log("test 2 passed")
}

// testReturnsHtmlWithTwoItems()
