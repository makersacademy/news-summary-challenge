
// const NewsClient = require('./NewsClient');
// const apiKey = require('./apiKey');
// const apiUrl = `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`
// jest.mock('./apiKey', () => 'mocked-api-key');
// jest.mock('./newsView', () => ({}));
// jest.mock('node-fetch', () => jest.fn());

// describe('NewsClient', () => {
//   it('loadStoryData() should return story data', async () => {
//     const mockResponse = {
//       response: {
//         results: [
//           { id: 1, headline: 'Test Headline 1' },
//           { id: 2, headline: 'Test Headline 2' },
//         ],
//       },
//     };
//     require('node-fetch').mockResolvedValue({ json: () => Promise.resolve(mockResponse) });

//     const newsClient = new NewsClient();
//     const result = await newsClient.loadStoryData();
//     // console.log(result)
//     expect(result).toEqual(mockResponse);
//     expect(require('node-fetch')).toHaveBeenCalledWith(apiUrl);
//   });
// });





// // const NewsClient = require("./newsClient");

// // require("jest-fetch-mock").enableMocks();

// // describe("Client class", () => {
// //   // it("calls fetch and loads data", (done) => {
// //   //   const client = new NewsClient();

// //   //   fetch.mockResponseOnce(
// //   //     JSON.stringify({
// //   //       story: "this is a mock story",
// //   //     })
// //   //   );

// //   //   client.loadStoryData((returnedDataFromApi) => {
// //   //     expect(returnedDataFromApi.story).toBe("this is a mock story");
// //   //     done();
// //   //   });
// //   // });



// // });