function testSinglePieceViewerInstantiation() {
    var article5 = new Article()
    article5.body = "<p>The body of article 5</p>"
    var controller = new Controller()
    controller.view.list.list.push(article5)
    var singlePieceViewer = new SinglePieceViewer(article5);
    assert.isTrue(singlePieceViewer.article instanceof Article)
    assert.isTrue(singlePieceViewer.article.body === "The body of article 5")
};
testSinglePieceViewerInstantiation();
