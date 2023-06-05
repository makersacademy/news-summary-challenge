/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const NewsClient = require('./newsClient');
const NewsModel = require('./newsModel');
const NewsView = require('./newsView');


require('jest-fetch-mock').enableMocks()

    describe('NewsView', () => {
        it('will display headlines and thumbnails', () => {
          document.body.innerHTML = fs.readFileSync('./index.html');
        //   const newsModel = new NewsModel();
      
          const object = {
            response: {
              results: [{ webTitle: "today news", fields: { thumbnail: "image" } }]
            }
          };
      
        //   newsModel.addNews(object);
        // mock model class
        mockModel = {
            getNews() {
                return object.response.results;
            }
        }
      
        //   const newsView = new NewsView(null, newsModel); 
        // Provide null for the client parameter
         const newsView = new NewsView(null, mockModel);
          newsView.displayFrontPage();
      
          expect(document.querySelector('div').textContent).toEqual("today news");
        });

        it('displays headlines and thunbnails from the API', () => {
            document.body.innerHTML = fs.readFileSync('./index.html');
        
            // const model = new NewsModel();
            // mock model 
            const modelMock = {
                addNews() {
                  jest.fn();
                },
                getNews() {
                    return object.response.results;
                  }
                }
        
            const object = {response: {results: [{webTitle: "news", fields:{thumbnail: "image"}}]}};
        
            const clientMock = {
              loadNews(callback) {
                callback(object);
              }
            }
        
            // const newsView = new NewsView(clientMock, model,);
            const newsView = new NewsView(clientMock, modelMock);
            newsView.displayNewsFromApi();
        
            expect(document.querySelector('div').textContent).toEqual("news");
          })

          xit('displays data from the API based on search query', () => {
            document.body.innerHTML = fs.readFileSync('./index.html');
        
            const modelMock = {
              addNews() {
                jest.fn();
              },
        
              getNews() {
                return object.response.results;
              }
            }
        
            const object = {response: {results: [{webTitle: "The Headline", fields:{thumbnail: "image"}}]}};
        
            const clientMock = {
              searchQueryResults(keyWord, callback) {
                callback(object);
              }
            }
        
            const newsView = new NewsView(modelMock, clientMock);
        
            newsView.displayNewsFromSearch("keyword");
        
            expect(document.querySelector('.link').innerText).toEqual("The Headline");
          })
      });
