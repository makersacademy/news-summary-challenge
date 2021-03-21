let testCount = 0

function describe(testGroup, it) {
  addGroupToHtml(testGroup);
  return it();
}

updateResultCount();

function it(test, expectation) {
  testCount++
  addTestToHtml(test);
  expectation();
}

function expect(actual) {
  return {
    toEqual: (expected) => {
      if (actual == expected) {
        addPassToHtml();
      } else {
        addFailToHtml();
        addFailInfoToHtml(actual, 'to equal', expected);
      }
    },

    toNotEqual: (expected) => {
      if (actual != expected) {
        addPassToHtml();
      } else {
        addFailToHtml();
        addFailInfoToHtml(actual, 'not to equal', expected);
      }
    },

    toBe: (expected) => {
      if (actual === expected) {
        addPassToHtml();
      } else {
        addFailToHtml();
        addFailInfoToHtml(actual, 'to be', expected);
      }
    },

    toNotBe: (expected) => {
      if (actual !== expected) {
        addPassToHtml();
      } else {
        addFailToHtml();
        addFailInfoToHtml(actual, 'not to be', expected);
      }
    },

    toInclude: (expected) => {
      if (actual.includes(expected)) {
        addPassToHtml();
      } else {
        addFailToHtml();
        addFailInfoToHtml(actual, 'to include', expected);
      }
    }
  };
}
