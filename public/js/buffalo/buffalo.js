let passCount = 0
let failCount = 0
const main = document.getElementById('specs')

function describe(testGroup, it) {
  addGroupToHtml(testGroup);
  return it();
}

function it(test, expectation) {
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

    toBeEmpty: () => {
      if (actual.length === 0) {
        addPassToHtml();
      } else {
        addFailToHtml();
        addFailInfoToHtml(actual, 'to be empty', null);
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
