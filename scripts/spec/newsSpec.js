it ("news should have a title, url, thumbnail and summary", () => {
  let news = new News();
  news.title = "today's news";
  news.url = "http://news.com";
  news.thumbnail = "http://news.jpg";
  news.summary = "this is today's news";
  expect(news.title).toEqual("today's news")
  expect(news.url).toEqual("http://news.com")
  expect(news.thumbnail).toEqual("http://news.jpg")
  expect(news.summary).toEqual("this is today's news")
})