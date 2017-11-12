(function(exports) {

function storyHasHeadline() {
var story = new Story("Dog shoots Cat");
assert.isTrue(story.getHeadline() === "Dog shoots Cat");
}
storyHasHeadline();
})(this);
