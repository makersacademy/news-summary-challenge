// Variables
let page;
page = document.documentElement;

// It block
function it(label, callback) {
  console.log(label);
  callback();
}

// Expectation matches
function expect(expected) {
  return {
    toEqual(actual) {
      if (expected !== actual) {
        console.log(
          "%cMatcher not equal",
          "font-weight: 800; background-color: #d60411c9; padding: 0 0.5rem;"
        );
      }
    },
    toNotEqual(actual) {
      if (expected === actual) {
        console.log(
          "%cMatcher equal",
          "font-weight: 800; background-color: #d60411c9; padding: 0 0.5rem;"
        );
      }
    },
  };
}

// Checking if page has content matchers
function pageHasContent(str) {
  if (!page.textContent.includes(str)) {
    console.log(
      "%cPage doesn't have content",
      "font-weight: 800; background-color: #d60411c9; padding: 0 0.5rem;"
    );
  }
}

function pageDoesNotHaveContent(str) {
  if (page.textContent.includes(str)) {
    console.log(
      "%cPage has content",
      "font-weight: 800; background-color: #d60411c9; padding: 0 0.5rem;"
    );
  }
}

// Helper functions
function fillInContentById(id, content) {
  document.getElementById(id).value = content;
}
