/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NewsView = require('./newsView')
 const NewsModel = require('./newsModel')
 const NewsApi = require('./newsApi')

 const newsList = [
     {
        "fields": {
            "headline": "Test Headline 1",
            "thumbline": "test_img 1",
        },
        "webUrl": "https://www.theguardian.com/sport/live/2022/feb/05/ireland-v-wales-six-nations-2022-live",
    },
    {
        "fields": {
            "headline": "Test Headline 2",
            "thumbline": "test_img 2",
        },
        "webUrl": "https://www.theguardian.com/sport/live/2022/feb/05/ireland-v-wales-six-nations-2022-live"
    }
 ]

 describe("NewsView class", () => {
     it('displays news title , url and image after click load button', () =>  {
        document.body.innerHTML = fs.readFileSync("./index.html");
         const model = new NewsModel()
         const view = new NewsView(model)
         const loadButtonEl = document.querySelector('#load-news')
            loadButtonEl.click()
            view.displayNews()
         expect(document.querySelectorAll('#news-list').length).toEqual(1)
     })

     it("displays news title , url and image after click search button", () => {
        document.body.innerHTML = fs.readFileSync("./index.html");
         const model = new NewsModel()
         const view = new NewsView(model)
         const searchButtonEl = document.querySelector('#search-news')
            searchButtonEl.click()
            view.displayNews()
         expect(document.querySelectorAll('#news-list').length).toEqual(1)
      });
 })
