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
  describe("searchStories", () => {
    // Reset mocks before each test 
    beforeEach(() => {
      fetch.resetMocks();
    });

    it ('sets the search term then makes a API request with that term', (done) => {
      // Instantiate client
      const client = new NewsClient();
      client.setSearchTerm('Football');
      expect(client.searchTerm).toEqual('Football');
    
      // Mocking the API 
      fetch.mockResponseOnce(JSON.stringify({ status: "okay", total: 33 }));
    
      // Define a mock function to intercept the call to fetch
      const mockFetch = (url) => {
        const apiKey = '1'
        // Assert that the value of apiUrl is correct
        expect(url).toEqual(`https://content.guardianapis.com/search?order-by=newest&show-fields=headline%2Cthumbnail%2Cstandfirst&q=Football&api-key=${apiKey}`);
        // Return the mock response
        return Promise.resolve({ json: () => Promise.resolve({ status: "okay", total: 33 }) });
      }
    
      // Call the fetch method using the mock function and expect the mock response
      client.searchStories((data) => {
        expect(data.status).toEqual("okay");
        expect(data.total).toEqual(33);
        done();
      }, mockFetch);
    });
   
    
    
    
    
    
    


    
  })  
  
})