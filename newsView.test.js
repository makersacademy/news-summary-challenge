/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsView = require('./newsView');

describe ('NewsView', () => {
  it ('it displays a single story on page', () => {

    // set the HTML content of the test
    const html = fs.readFileSync("./index.html");
    document.body.innerHTML = html;

    // mock the model class

    const mockModel = jest.mock('./newsModel', () => {
      return jest.fn().mockImplementation(() => {
        return {
          allStories: jest.fn().mockReturnValue(['mock story']),
          add: jest.fn(),
        };
      });
    });

    // instantize the view 

    view = new NewsView(mockModel)

    // Display the story Headline on the page
    view.displayStories()

    // There should now be a div.story on the page 
    expect(document.querySelectorAll('#div.story').length).toEqual(1)

  
  })
})