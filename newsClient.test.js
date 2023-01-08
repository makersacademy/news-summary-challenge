const NewsClient = require('./newsClient');
require("jest-fetch-mock").enableMocks();


describe('NewsClient', () => {

  describe("fetchStories", () => {
    // Reset mocks before each test 
    beforeEach(() => {
      fetch.resetMocks();
    });

    it (' Makes an API request for the current date', (done) => {

      //Instantiate client
      const client = new NewsClient()
      // Mocking the API 
      fetch.mockResponseOnce(JSON.stringify({ status: "okay", total: 33 }));

      // Call the fetch method and expect the mock response
      client.fetchStories((data) => {
        expect(data.status).toEqual("okay");
        expect(data.total).toEqual(33);
        done();
      });
    })

    
  })  
  
})