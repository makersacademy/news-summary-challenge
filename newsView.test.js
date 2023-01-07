/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsView = require('./newsView');
const NewsModel = require('./newsModel');

describe ('NewsView', () => {
  it ('it displays a single story on page', () => {

    // set the HTML content of the test
    const html = fs.readFileSync("./index.html");
    document.body.innerHTML = html;

    // mock the model class

    // const mockModel = jest.mock('./newsModel', () => {
    //   return jest.fn().mockImplementation(() => {
    //     return {
    //       allStories: jest.fn().mockReturnValue(['mock story']),
    //       add: jest.fn(),
    //     };
    //   });
    // });

    const model = new NewsModel()
    model.add('test story')
   

    // instantize the view 

    view = new NewsView(model)

    // Display the story Headline on the page
    view.displayStories()

    // There should now be a div.story on the page 
    expect(document.querySelectorAll('.headline').length).toEqual(1)
    expect(document.querySelectorAll('.headline')[0].innerText).toEqual('test story')

  
  })
})