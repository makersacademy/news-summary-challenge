"use strict";

const returnURL = url => ({url: url})

it("callAPI returns the result of the fetchFunction at the correct URL", () => {
  expect(callAPI("https://example-url.com", returnURL).url).toEqual("https://example-url.com")
})

it("callAPI appends options to the URL in a query string", function() {
  let options = {option1: "one", option2: "two"}
  expect(callAPI("https://example-url.com", returnURL, options).url).toEqual("https://example-url.com?option1=one&option2=two")
})


let responseJSON = JSON.stringify({response: {currentPage: 1, orderBy: "Newest",
                  results: [{webTitle: "Amazing headline 1!"}, {webTitle: "Amazing headline 2!"}]}})

let response = new Response(responseJSON)

let articlesPromise = new Promise((resolve, reject) => {
  setTimeout( function() {
    resolve(response)
  }, 250)
})

const returnArticlesPromise = () => articlesPromise

it("getLatestArticles adds the articles returned from the API to an array as objects with headlines", () => {
  getLatestArticles(returnArticlesPromise)
  console.log("Articles", articles)
  // expect(1).toEqual(1)
  expect(articles.length).toEqual(2)
  // expect(articles[0].headline).toEqual("Amazing headline 1!")
  // expect(articles[1].headline).toEqual("Amazing headline 2!")
})
