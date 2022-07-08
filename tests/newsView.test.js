/**
 * @jest-environment jsdom
 */


const GuardianModel = require('../guardianModel');
const NewsView = require('../newsView');
const fs = require('fs');

describe("GuardianView", () => {
  describe("displaying news summary", () => {
    it('shows the headline and picture of one piece of news summary', () => {
      document.body.innerHTML = fs.readFileSync(__dirname + '/../index.html');
      const fakeApi = {
        loadNews: () => {
          // callbackFunction
        }
      }
      const model = new GuardianModel();
      const view = new NewsView(model, fakeApi);
    })
  })
})