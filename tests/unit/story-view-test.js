describe("StoryView .toHtml",
  function () {
    var description = ".toHtml returns functional html";
    var storyMock = new StoryMock("Text", "Title", "URL");
    var storyView = new StoryView(storyMock);
    var html = ["<div id='story'>",
                  "<img src='", storyMock.url(), "'></br>",
                  "<h2>", storyMock.title(), "</h2></br>",
                  "<p>", storyMock.text(), "</p></br>",
                "</div>"].join("");
    assert.isTrue(storyView.toHtml() === html, description);
  }
);
