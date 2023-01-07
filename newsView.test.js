/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsView = require('./newsView');
const NewsModel = require('./newsModel');

jest.mock('./newsModel', () => {
  return jest.fn().mockImplementation(() => {
    return {
      allStories: jest.fn(),
      add: jest.fn(),
    };
  });
});

describe ('NewsView', () => {
  it ('it displays a single story on page', () => {

    // set the HTML content of the test
    const html = fs.readFileSync("./index.html");
    document.body.innerHTML = html;
   

    // instantize the view and model
    const model = new NewsModel()

    // Mock the model implementaton
    model.allStories.mockImplementationOnce(() => ['test story']);
    view = new NewsView(model)

    // Display the story Headline on the page
    view.displayStories()

    // There should now be a div.story on the page 
    expect(document.querySelectorAll('.headline').length).toEqual(1)
    expect(document.querySelectorAll('.headline')[0].innerText).toEqual('test story')

  
  })

  it ('it displays multiple stories on page', () => {

    // set the HTML content of the test
    const html = fs.readFileSync("./index.html");
    document.body.innerHTML = html;
   

    // instantize the view and model
    const model = new NewsModel()

    // Mock the model implementaton
    model.allStories.mockImplementationOnce(() => ['Headline One', 'Headline Two']);
    view = new NewsView(model)

    // Display the story Headline on the page
    view.displayStories()

    // There should now be a div.story on the page 
    expect(document.querySelectorAll('.headline').length).toEqual(2)
    expect(document.querySelectorAll('.headline')[0].innerText).toEqual('Headline One')

  
  })
})