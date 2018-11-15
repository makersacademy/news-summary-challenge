/* eslint-disable no-console */
function describe(desc, fn) {
  console.log(desc);
  fn();
}

function it(test, fn) {
  console.log(test);
  fn();
}

function expect(expectation) {
  return {
    toEqual: (assertion) => {
      console.log(assertion === expectation ? '✅' : '❌', new Error().stack);
    },
  };
}

export { describe, it, expect };
