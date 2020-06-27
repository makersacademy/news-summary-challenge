function constructStoryWithHeadline() {
  let story = new Story("Big Story!");
  expect.isTrue(story.headline === "Big Story!");
};
constructStoryWithHeadline();

function returnHeadlineHTML() {
  let story = new Story("Major Scandal");
  let html = "<li><h2>Major Scandal</h2></li>";
  expect.isTrue(story.returnHeadline() === html);
}
returnHeadlineHTML();

