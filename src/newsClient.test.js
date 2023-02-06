const Client = require("./newsClient");

require("jest-fetch-mock").enableMocks();

describe("client class", () => {
  let client;
  beforeEach(() => {
    fetch.mockReset();
    client = new Client();
  });

  it("sends fetch request to guardian API", (done) => {
    fetch.mockResponseOnce(
      JSON.stringify({
        type: "article",
        sectionID: "sport",
        webTitle:
          "At last, the inventors of modern skiing have something to cheer",
      })
    );

    client.loadNews((returnedData) => {
      expect(returnedData.type).toBe("article");
      expect(returnedData.sectionID).toBe("sport");
      expect(returnedData.webTitle).toBe(
        "At last, the inventors of modern skiing have something to cheer"
      );
      done();
    });
  });
});
