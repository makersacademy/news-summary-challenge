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
        console.log('✅');
      } else {
        console.log('❌', new Error().stack);
      }
    },
  };
}
