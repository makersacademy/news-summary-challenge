/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const GuardianView = require('./guardianView');
/*const mockResponse = {
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
}; */

const mockResponse = require('./guardianMockResponse.json')
jest.mock('./guardian')

describe('Page view', () => {
  it('displays 1 headline', () => {
    
  });
})