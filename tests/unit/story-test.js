describe("Story .text",
function () {
    var description = "Story can add and return a story summary";
    var text = "This is a news story summary";
    var story = new Story(text);
    assert.isTrue(story.text() === text, description);
  }
);

describe("Story .title",
function () {
    var description = "Story can add and return a title";
    var text = "This is a news story summary";
    var title = "News Story";
    var story = new Story(text, title);
    assert.isTrue(story.title() === title, description);
  }
);

describe("Story .url",
function () {
    var description = "Story can add and return an image url";
    var text = "This is a news story summary";
    var id = 1;
    var url = "https://i.guim.co.uk/img/media/8f7aaa9699836511550ecbc75dc8cfaf48e6c85e/0_50_3500_2101/master/3500.jpg?w=700&q=20&auto=format&usm=12&fit=max&dpr=2&s=6f5e1e2c761eeeafb00a45979aaa867c";
    var story = new Story(text, id, url);
    assert.isTrue(story.url() === url, description);
  }
);
