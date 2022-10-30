const GuardianApi = require("../src/GuardianApi");
require("jest-fetch-mock").enableMocks();

describe("Guardian Api class", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });
  it("calls fetch and loads data", (done) => {
    const client = new GuardianApi();
    fetch.mockResponseOnce(
      JSON.stringify({
        name: ["This Article is coming from the server"],
      })
    );
    client.loadArticles((callback) => {
      expect(callback.name).toEqual(["This Article is coming from the server"]);
      done();
    });
  });
});
