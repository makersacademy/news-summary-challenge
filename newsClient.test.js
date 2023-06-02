const apiKey = require('./apiKey')
const NewsClient = require("./newsClient");
require('jest-fetch-mock').enableMocks();

describe('NewsClient class', () => {
  let client;

  beforeEach(() => {
    fetch.resetMocks()
    client = new NewsClient;
  })

  it('fetches the latest news from the Guardian API and performs a callback on it', (done) => {
    // mock fetch response
    fetch.mockResponseOnce(JSON.stringify({
      response: {
        results: [
          {
            webUrl: "https://www.theguardian.com/sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding",
            fields: {
              headline: "At last, the inventors of modern skiing have something to cheer: Dave Ryding ",
              byline: "Andy Bull",
              thumbnail: "https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg"
            },
          },
        ]
      }
    },
    ))
    // checks that fetch request has been made to the right URL
    // and that the function performs a callback on the response
    client.fetchNewsStories((data) => {
      expect(data).toBeTruthy();
      expect(fetch.mock.calls[0][0]).toBe(
        `https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`
      );
      done()
    })
  })

  it('formats the the response into an array of news story objects', (done) => {
    // mock fetch reponse containing two stories with extraneous data removed 
    fetch.mockResponseOnce(JSON.stringify({
        response: {
          results: [
            {
              webUrl: "https://www.theguardian.com/sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding",
              fields: {
                headline: "At last, the inventors of modern skiing have something to cheer: Dave Ryding ",
                byline: "Andy Bull",
                thumbnail: "https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg"
              },
            },
            {
              webUrl: "https://www.theguardian.com/business/live/2022/feb/02/oil-prices-climb-seven-year-highs-opec-meeting-markets-await-eurozone-inflation",
              fields: {
                headline: "Ofgem to unveil new household energy bill price cap on Thursday morning",
                byline: "Julia Kollewe",
                thumbnail: "https://media.guim.co.uk/aee3b3b05ea2a37acdadc91095c163fd381eba4a/0_24_3500_2100/500.jpg"
              },
            }
          ]
        }
      },        
    ));

    client.fetchNewsStories((stories) => {
      expect(stories.length).toBe(2);
      expect(stories[0].headline).toBe("At last, the inventors of modern skiing have something to cheer: Dave Ryding ");
      expect(stories[0].byline).toBe("Andy Bull");
      expect(stories[0].thumbnailUrl).toBe("https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg");
      done();
    })
  })

  // xit('takes an optional query string', () => {
  //   // placeholder
  // })

  // xit('catches errors', () => {
  //   // placeholder
  // })
})
