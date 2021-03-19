function describe(testGroup, itBlock) {
  console.log(`${testGroup}`)
  return itBlock();
}

function it(test, expectation) {
  console.log(test);
  expectation();
}

function expect(actual) {
  return {
    toEqual: (expected) => {
      if (actual == expected) {
        console.log('=== PASS ===\n\n');
      } else {
        console.log('*** FAIL ***');
        console.log(`expected ${actual} to equal ${expected}\n\n`);
      }
    },

    toNotEqual: (expected) => {
      if (actual != expected) {
        console.log('=== PASS ===\n\n');
      } else {
        console.log('*** FAIL ***');
        console.log(`expected ${actual} to not equal ${expected}\n\n`);
      }
    },

    toBe: (expected) => {
      if (actual === expected) {
        console.log('=== PASS ===\n\n');
      } else {
        console.log('*** FAIL ***');
        console.log(`expected ${actual} to be ${expected}\n\n`);
      }
    },

    toNotBe: (expected) => {
      if (actual !== expected) {
        console.log('=== PASS ===\n\n');
      } else {
        console.log('*** FAIL ***');
        console.log(`expected ${actual} to not be ${expected}\n\n`);
      }
    },

    toBeEmpty: () => {
      if (actual.length === 0) {
        console.log('=== PASS ===\n\n');
      } else {
        console.log('*** FAIL ***');
        console.log(`expected ${actual} to be empty\n\n`);
      }
    },

    toInclude: (expected) => {
      if (actual.includes(expected)) {
        console.log('=== PASS ===\n\n');
      } else {
        console.log('*** FAIL ***');
        console.log(`expected ${actual} to include ${expected}\n\n`);
      }
    }
  };
}
