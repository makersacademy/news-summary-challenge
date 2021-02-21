"use strict";

const returnURL = url => ({url: url})

it("callAPI returns the result of the fetchFunction at the correct URL", () => {
  expect(callAPI("https://example-url.com", returnURL).url).toEqual("https://example-url.com")
})
