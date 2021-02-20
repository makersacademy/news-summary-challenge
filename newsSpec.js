
it("should add a story to the newsBank", function () {
  addNews("This is a story to store in the bank");
  expect(newsBank[0]).toEqual("This is a story to store in the bank")
  clear();
});

it("should add a news headline to a para tag and display on the page", function () {
  addNews("This is the news on the page");
  pageHasContent("This is the news on the page");
  clear();
});

it("should be able to identify a note and its href", function () {
  addNews("This is a story to with a unique link and id");
  newsItem = document.getElementById("story0")
  expect(newsItem.href).toNotEqual(null);
  clear();
});
