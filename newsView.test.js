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
        return  [{headline:"Test story", thumbnail: "https://media.guim.co.uk/ad358c0db52e4bc4569399d306f67f1a962f785d/0_189_5680_3408/500.jpg", webUrl: "https://www.theguardian.com/us-news/2023/jan/07/two-years-on-from-the-capitol-riot-the-toxic-legacy-of-trumps-big-lie"}];
      },
    };
   
   
    const view = new NewsView(mockClient, mockModel)

    // Display the story Headline on the page
    view.displayStories()

    // There should now be a div.story on the page 
    expect(document.querySelectorAll('.headline').length).toEqual(1)
    expect(document.querySelectorAll('.headline')[0].innerHTML).toBe('<a href="https://www.theguardian.com/us-news/2023/jan/07/two-years-on-from-the-capitol-riot-the-toxic-legacy-of-trumps-big-lie">Test story</a>')

  
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
        return [{ headline: "Headline One", thumbnail: "http://url.to/image", standfirst: "standfirst1", weburl: "url1.com" },{ headline: "Headline Two",  thumbnail: "http://url.to/image2", standfirst: "standfirst2", weburl: "url2.com" } ];
      },
    };
   
    const view = new NewsView(mockClient, mockModel)

    // Display the story Headline on the page
    view.displayStories()

    // There should now be a div.story on the page 
    expect(document.querySelectorAll('.headline').length).toEqual(2)
    expect(document.querySelectorAll('.thumbnail')[0].src).toEqual('http://url.to/image')
    expect(document.querySelectorAll('.standfirst')[1].innerHTML).toEqual("standfirst2")

  
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
                thumbnail: "http://url.to/image2", 
                standfirst: "Story standfirst",    
              
              },
              webUrl: "https://www.theguardian.com/us-news/2023/jan/07/two-years-on-from-the-capitol-riot-the-toxic-legacy-of-trumps-big-lie"
            }]}
        }
        callback(mockData);
      },
    };

    // mock the model 

    const mockModel = {
      setStories: (data) => {
        expect(data).toEqual(
         [{headline: "Atom Valley: Andy Burnham’s vision for regenerating Great Manchester", thumbnail: "http://url.to/image2", standfirst: "Story standfirst",webUrl: "https://www.theguardian.com/us-news/2023/jan/07/two-years-on-from-the-capitol-riot-the-toxic-legacy-of-trumps-big-lie" }]
        );
      },
      allStories: () => {
        return [{headline: "Atom Valley: Andy Burnham’s vision for regenerating Great Manchester", thumbnail: "http://url.to/image2", standfirst: "Story standfirst",webUrl: "https://www.theguardian.com/us-news/2023/jan/07/two-years-on-from-the-capitol-riot-the-toxic-legacy-of-trumps-big-lie" }];
      },
    };
    // instantize the view
    const view = new NewsView(mockClient, mockModel)

    view.displayStoriesFromApi();

     // There should now be a headline from the API on the page 
    expect(document.querySelectorAll('.headline').length).toEqual(1)
    expect(document.querySelectorAll('.headline')[0].innerHTML).toEqual("<a href=\"https://www.theguardian.com/us-news/2023/jan/07/two-years-on-from-the-capitol-riot-the-toxic-legacy-of-trumps-big-lie\">Atom Valley: Andy Burnham’s vision for regenerating Great Manchester</a>")
    

  
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
                thumbnail: "https://media.guim.co.uk/ad358c0db52e4bc4569399d306f67f1a962f785d/0_189_5680_3408/500.jpg",
                
              },
              webUrl: "https://www.theguardian.com/us-news/2023/jan/07/two-years-on-from-the-capitol-riot-the-toxic-legacy-of-trumps-big-lie"
            }]}
        }
        callback(mockData);
      },
    };

    // mock the model 

    const mockModel = {
      setStories: (data) => {
        expect(data).toEqual(
         [{headline:"Two years on from the Capitol riot: the toxic legacy of Trump’s big lie", thumbnail: "https://media.guim.co.uk/ad358c0db52e4bc4569399d306f67f1a962f785d/0_189_5680_3408/500.jpg", webUrl: "https://www.theguardian.com/us-news/2023/jan/07/two-years-on-from-the-capitol-riot-the-toxic-legacy-of-trumps-big-lie"}]
        );
      },
      allStories: () => {
        return  [{headline:"Two years on from the Capitol riot: the toxic legacy of Trump’s big lie", thumbnail: "https://media.guim.co.uk/ad358c0db52e4bc4569399d306f67f1a962f785d/0_189_5680_3408/500.jpg", webUrl: "https://www.theguardian.com/us-news/2023/jan/07/two-years-on-from-the-capitol-riot-the-toxic-legacy-of-trumps-big-lie"}];
      },
    };
    // instantize the view
    const view = new NewsView(mockClient, mockModel)

    view.displayStoriesFromApi();

     // There should now be a headline from the API on the page 
    expect(document.querySelectorAll('.headline').length).toEqual(1)
    expect(document.querySelectorAll('.headline')[0].innerHTML).toEqual('<a href="https://www.theguardian.com/us-news/2023/jan/07/two-years-on-from-the-capitol-riot-the-toxic-legacy-of-trumps-big-lie">Two years on from the Capitol riot: the toxic legacy of Trump’s big lie</a>')
    // There should be one image from the API on the page 
    expect(document.querySelectorAll('.thumbnail').length).toEqual(1)
    // expect(document.querySelectorAll('.thumbnail')[0].innerText).toEqual("Two years on from the Capitol riot: the toxic legacy of Trump’s big lie")
    
  })

  it("Passes user input to the client class", () => {
    const html = fs.readFileSync("./index.html");
    document.body.innerHTML = html;

    const mockClient = {

      constructor(){
        expect(this.searchTerm).toEqual('politics');
      },
      
      fetchStories: (callback) => {

      },
    };

    const mockModel = {
      add: () => {},
      allStories: () => {
        return [];
      },
    };

    new NewsView(mockClient, mockModel);

    const inputEl = document.querySelector("#search-input");
    inputEl.value = "politics";

    const buttonEl = document.querySelector("#submit");
    buttonEl.click();
  });
})