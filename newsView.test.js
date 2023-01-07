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

  it ('it adds API response data to the model', () => {

    // set the HTML content of the test
    const html = fs.readFileSync("./index.html");
    document.body.innerHTML = html;
   
    // mock the client

    const mockClient = {
      fetchStories: (callback) => {
        const mockData = {response: {
          results: [
            {fields: {
                headline: "Atom Valley: Andy Burnham’s vision for regenerating Great Manchester",    
              }
            }]}
        }
        callback(mockData);
      },
    };

    // mock the model 

    const mockModel = {
      add: (data) => {
        expect(data).toEqual({
          headline: "Atom Valley: Andy Burnham’s vision for regenerating Great Manchester"
        });
      },
      getParty: () => {
        return [];
      },
    };
    // instantize the view
    const model = new NewsModel(mockClient, mockModel)

    // There should now be a headline from the API on the page 
    view.displayStoriesFromApi();
    

  
  })
})