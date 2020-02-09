(function testStoryTakesText() {
    var story = new Story('My favourite language is JavaScript', 0)

    assert.isTrue(story.showText() === 'My favourite language is JavaScript');
    assert.isTrue(story.id === 0)
})();
