const TravisTest = require('./travistest');

// Just testing out Travis CI configuration
describe('Testing Travis CI setup', () => {
  it('has everything properly setup', () => {
    const test = new TravisTest();
    expect(test.mymethod).toBe(true);
    });
});