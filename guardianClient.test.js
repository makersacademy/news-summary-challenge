const GuardianClient = require('./guardianClient');

require('jest-fetch-mock').enableMocks();

describe('GuardianClient', () => {
  it('calls fetch and loads data', (done) => {
    const client = new GuardianClient();

    fetch.mockResponseOnce(JSON.stringify({
      response: {
        status: 'ok',
        results: [
          {
            fields: {
              headline: 'Headline',
              byline: 'Luke McLaughlin',
              thumbnail: 'https://media.guim.co.uk/46a5a857cebcdcaf804752d2bd5886e067fd4ff8/0_4_4943_2967/500.jpg'
            }   
          }
        ]
      }
    })); //end mock response
    client.fetchGuardianData().then(response => {
      expect(response.response.results[0].fields.headline).toEqual('Headline');
      done();
    })
  });
})