"use strict";

const returnURL = url => ({url: url})

it("callAPI returns the result of the fetchFunction at the correct URL", () => {
  expect(callAPI("https://example-url.com", returnURL).url).toEqual("https://example-url.com")
})

it("appends options to the URL in a query string", function() {
  let options = {option1: "one", option2: "two"}
  expect(callAPI("https://example-url.com", returnURL, options).url).toEqual("https://example-url.com?option1=one&option2=two")
})
