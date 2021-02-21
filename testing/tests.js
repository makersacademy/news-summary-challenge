it("page has title", () => {
  expect(document.getElementsByTagName("h1")[0].innerText).toEqual(
    "Headlines page"
  );
});

// After tests have run log to console tests have been complete

console.log(
  "%cTests complete!",
  "font-weight: 600; background-color: #6cd802db; padding: 0 1rem;"
);
