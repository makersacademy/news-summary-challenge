it("shows message that something", () => {
  expect(document.getElementsByClassName("headline-title").innerText).toEqual(
    "Testing message"
  );
});

// After tests have run log to console tests have been complete

console.log(
  "%cTests complete!",
  "font-weight: 600; background-color: #6cd802db; padding: 0 1rem;"
);
