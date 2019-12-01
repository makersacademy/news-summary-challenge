function testReturnsHtmlWithOneItem() {
    var listOne = [{webTitle: "one"}];
    var listView = new ListView(listOne)
    assert.isTrue(listView.displayHtml() === "<ul><li><div><a id='single-news-item' href='http://localhost:8080#0'>one</a></div></li></ul>");
    console.log("test 1 passed")
}

testReturnsHtmlWithOneItem() 

function testReturnsHtmlWithTwoItems() {
    var listOne = [{webTitle: "one"}, {webTitle: "two"}];
    var listView = new ListView(listOne)
    assert.isTrue(listView.displayHtml() === "<ul><li><div><a id='single-news-item' href='http://localhost:8080#0'>one</a></div></li><li><div><a id='single-news-item' href='http://localhost:8080#1'>two</a></div></li></ul>");
    console.log("test 2 passed")
}

testReturnsHtmlWithTwoItems()
