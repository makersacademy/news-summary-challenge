
it("should add a story to the newsBank", function () {
  addNews("This is the headline", "This the story to store in the bank");
  expect(newsBank[0][0]).toEqual("This is the headline")
  expect(newsBank[0][1]).toEqual( "This the story to store in the bank")
  clear();
});

it("should add a news headline to a para tag and display on the page", function () {
  addNews("This is the headline on the page", "We shouldn't see this text");
  pageHasContent("This is the headline on the page");
  clear();
});

it("should be able to identify a note and its href", function () {
  addNews("This is a story to with a unique link and id", "This text won't display");
  newsItem = document.getElementById("story0")
  expect(newsItem.href).toNotEqual(null);
  clear();
});

it("can open a modal", function () {
  openModal();
  expect(document.getElementById("modalWrapper").style.display).toEqual("block");
  clear();
})
