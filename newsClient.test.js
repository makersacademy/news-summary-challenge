/**
 * @jest-environment jsdom
 */

const axios = require("axios");
const NewsClient = require("./newsClient");
const apiKey = require("./apiKey");

jest.mock("axios");

describe("NewsClient class", () => {
  it("should call the callback function with the response data", async () => {

    //given
    const mockData = {
      data: {
        response: {
          currentPage: 1,
        }}};
    axios.get.mockResolvedValueOnce(mockData)

    //when
    const newsClient = new NewsClient();

    //then
    const callback = jest.fn();
    await newsClient.loadData(callback);
    expect(axios.get).toHaveBeenCalledWith(`https://content.guardianapis.com/search?api-key=${apiKey}&show-fields=thumbnail`);
    expect(callback).toHaveBeenCalledWith(expect.any(Object));
  });
});
