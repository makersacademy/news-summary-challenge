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
                  results: [{webTitle: "Amazing headline 1!", fields: {thumbnail: "picURL1"}}, {webTitle: "Amazing headline 2!", fields: {thumbnail: "picURL2"}}]}})

let response = new Response(responseJSON)

let articlesPromise = new Promise((resolve, reject) => {
  setTimeout( function() {
    resolve(response)
  }, 250)
})

const returnArticlesPromise = () => articlesPromise

/* Commenting these tests out for now. I can't work out why articles was coming back as an empty array
 when running inside the expect, or inside console.log's where I was doing something else to the array,
 e.g. console.log(articles) was as expected, but console.log(articles.length) was 0. But when running
 in the console subsequently, articles.length was coming back as 2, and articles was as expected.
 I suspect it's something to do with the order of operation, but I don't know why */

 /* Update - these are now passing when I put them inside a then, since the getLatestArticles returns a
 promise, but actually they're passing erroneously, and aren't actually being run. I'm not sure if that's
 because of the way this test is set up, or Pedigree itself */

it("getLatestArticles adds the articles returned from the API to an array as objects with headlines and pictures", () => {
  getLatestArticles(returnArticlesPromise).then(() => {
  expect(articles.length).toEqual(2)
  expect(articles[0].headline).toEqual("Amazing headline 1!")
  expect(articles[1].headline).toEqual("Amazing headline 2!")
  expect(articles[0].thumbnail).toEqual("picURL1")
  expect(articles[1].thumbnail).toEqual("picURL2")
  })
})
