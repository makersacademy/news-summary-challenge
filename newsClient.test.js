const Client = require('./newsClient');
require('jest-fetch-mock').enableMocks();

describe("NewsClient", () => {

  it("Calls fetch and loads data", (done) => {
    const client = new Client();
    fetch.mockResponseOnce(JSON.stringify({
      headline: "Free ice cream for people in their 30s"
    }))

    client.loadArticles().then((data) => {
      expect(data.headline).toEqual("Free ice cream for people in their 30s");
      done();
    })
  }); 

  it("Calls fetch and loads data on a topic", (done) => {
    const client = new Client();
    fetch.mockResponseOnce(JSON.stringify({
      headline: "Dogs are great"
    }))
    client.loadTopicArticles("topic").then((data) => {
      expect(data.headline).toEqual("Dogs are great");
      done();
    })
  }); 

  it("Returns an error when fetch fails", (done) => {
    const client = new Client();
    fetch.mockReject("fake error message")

    client.loadArticles().then((error) => {
      expect(error).toEqual("fake error message")
      done();
    })
  })

  it("Returns an error when fetch fails", (done) => {
    const client = new Client();
    fetch.mockReject("fake error message")

    client.loadTopicArticles("topic").then((error) => {
      expect(error).toEqual("fake error message")
      done();
    })
  })
});