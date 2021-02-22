it("fetches headline thumbnail as expected", () => {
  mockFetch(myMockData)
    .then((response) => response.json())
    .then((data) =>
      expect(data.response.content.fields.thumbnail).toEqual(
        "https://media.guim.co.uk/e5517000b6c4c991eff6fff9e496b1af7e52595a/0_330_2448_1469/500.jpg"
      )
    );
});

it("fetches headline title as expected", () => {
  mockFetch(myMockData)
    .then((response) => response.json())
    .then((data) =>
      expect(data.response.content.webTitle).toEqual(
        "Matt Hancock's ex-neighbour under investigation by UK's medicine agency"
      )
    );
});

it("fetches headline url as expected", () => {
  mockFetch(myMockData)
    .then((response) => response.json())
    .then((data) =>
      expect(data.response.content.webUrl).toEqual(
        "https://www.theguardian.com/politics/2021/feb/21/matt-hancock-ex-neighbour-alex-bourne-under-investigation-uk-medical-regulator"
      )
    );
});

it("fetches headline handle as expected", () => {
  mockFetch(myMockData)
    .then((response) => response.json())
    .then((data) =>
      expect(data.response.content.id).toEqual(
        "politics/2021/feb/21/matt-hancock-ex-neighbour-alex-bourne-under-investigation-uk-medical-regulator"
      )
    );
});

// After tests have run log to console tests have been complete

console.log(
  "%cTests complete!",
  "font-weight: 600; background-color: #6cd802db; padding: 0 1rem;"
);
