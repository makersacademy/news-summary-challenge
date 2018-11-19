/* eslint-disable no-console */
export function describe(desc, fn) {
  console.log(desc);
  fn();
}

export function it(test, fn) {
  console.log(test);
  fn();
}

export function expect(expectation) {
  return {
    toEqual: (assertion) => {
      if (assertion === expectation) {
        console.log('✅', assertion);
      } else {
        console.log('❌', new Error().stack);
        console.log('❌', ' asserted: ', assertion);
        console.log('❌', ' expected: ', expectation);
      }
    },
  };
}
