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

function storyHasImage() {
  var image = 'https://static.pexels.com/photos/59523/pexels-photo-59523.jpeg'
var story = new Story("Dog shoots Cat", "A dog shot a cat, today.", image);
assert.isTrue(story.getImage() === image);
}
storyHasImage();

})(this);
