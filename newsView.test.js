/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsView = require('./newsView');
const NewsModel = require('./newsModel');
const NewsClient = require('./newsClient');

jest.mock('./newsModel', () => {
  return jest.fn().mockImplementation(() => {
    return {
      allStories: jest.fn(),
      add: jest.fn(),
    };
  });
});

jest.mock('./newsClient', () => {
  return jest.fn().mockImplementation(() => {
    return {
      fetchStories: jest.fn(),
    };
  });
});

describe ('NewsView', () => {
  it ('it displays a single story on page', () => {

    // set the HTML content of the test
    const html = fs.readFileSync("./index.html");
    document.body.innerHTML = html;
   
    // Mock the Client
    const mockClient = {};

    // Mock the Model
    const mockModel = {
      allStories: () => {
        return [{ headline: "test story", thumbnail: "http://url.to/image" }];
      },
    };
   
    const view = new NewsView(mockClient, mockModel)

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
   

    // Mock the Client
    const mockClient = {};

    // Mock the Model
    const mockModel = {
      allStories: () => {
        return [{ headline: "Headline One", thumbnail: "http://url.to/image" },{ headline: "Headline Two",  thumbnail: "http://url.to/image2" } ];
      },
    };
   
    const view = new NewsView(mockClient, mockModel)

    // Display the story Headline on the page
    view.displayStories()

    // There should now be a div.story on the page 
    expect(document.querySelectorAll('.headline').length).toEqual(2)
    expect(document.querySelectorAll('.headline')[0].innerText).toEqual('Headline One')
    expect(document.querySelectorAll('.thumbnail')[0].src).toEqual('http://url.to/image')
    expect(document.querySelectorAll('.headline')[1].innerText).toEqual('Headline Two')
    expect(document.querySelectorAll('.thumbnail')[1].src).toEqual('http://url.to/image2')

  
  })

  xit ('it adds API response data to the model', () => {

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
      setStories: (data) => {
        expect(data).toEqual(
         ["Atom Valley: Andy Burnham’s vision for regenerating Great Manchester"]
        );
      },
      allStories: () => {
        return ["Atom Valley: Andy Burnham’s vision for regenerating Great Manchester"];
      },
    };
    // instantize the view
    const view = new NewsView(mockClient, mockModel)

    view.displayStoriesFromApi();

     // There should now be a headline from the API on the page 
    expect(document.querySelectorAll('.headline').length).toEqual(1)
    expect(document.querySelectorAll('.headline')[0].innerText).toEqual("Atom Valley: Andy Burnham’s vision for regenerating Great Manchester")
    

  
  })

  it ('it adds API response data with images to the model', () => {

    // set the HTML content of the test
    const html = fs.readFileSync("./index.html");
    document.body.innerHTML = html;
   
    // mock the client

    const mockClient = {
      fetchStories: (callback) => {
        const mockData = {response: {
          results: [
            {fields: {
                headline: "Two years on from the Capitol riot: the toxic legacy of Trump’s big lie",   
                thumbnail: "https://media.guim.co.uk/ad358c0db52e4bc4569399d306f67f1a962f785d/0_189_5680_3408/500.jpg"
              }
            }]}
        }
        callback(mockData);
      },
    };

    // mock the model 

    const mockModel = {
      setStories: (data) => {
        expect(data).toEqual(
         [{headline:"Two years on from the Capitol riot: the toxic legacy of Trump’s big lie", thumbnail: "https://media.guim.co.uk/ad358c0db52e4bc4569399d306f67f1a962f785d/0_189_5680_3408/500.jpg"}]
        );
      },
      allStories: () => {
        return  [{headline:"Two years on from the Capitol riot: the toxic legacy of Trump’s big lie", thumbnail: "https://media.guim.co.uk/ad358c0db52e4bc4569399d306f67f1a962f785d/0_189_5680_3408/500.jpg"}];
      },
    };
    // instantize the view
    const view = new NewsView(mockClient, mockModel)

    view.displayStoriesFromApi();

     // There should now be a headline from the API on the page 
    expect(document.querySelectorAll('.headline').length).toEqual(1)
    expect(document.querySelectorAll('.headline')[0].innerText).toEqual("Two years on from the Capitol riot: the toxic legacy of Trump’s big lie")
    // There should be one image from the API on the page 
    expect(document.querySelectorAll('.thumbnail').length).toEqual(1)
    // expect(document.querySelectorAll('.thumbnail')[0].innerText).toEqual("Two years on from the Capitol riot: the toxic legacy of Trump’s big lie")
    
    

  
  })
})