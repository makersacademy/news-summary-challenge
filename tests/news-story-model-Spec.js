(function(exports) {

function storyHasHeadline() {
var story = new Story("Dog shoots Cat", "A dog shot a cat, today.");
assert.isTrue(story.getHeadline() === "Dog shoots Cat");
}
storyHasHeadline();

function storyHasSummary() {
var story = new Story("Dog shoots Cat", "A dog shot a cat, today.");
assert.isTrue(story.getSummary() === "A dog shot a cat, today.");
}
storyHasSummary();

})(this);
