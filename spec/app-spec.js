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
      if (assertion === expectation) {
        console.log('✅');
      } else {
        console.log('❌', new Error().stack);
      }
    },
  };
}

describe('test', () => {
  it('is true', () => {
    expect(true).toEqual(true);
  });
});
