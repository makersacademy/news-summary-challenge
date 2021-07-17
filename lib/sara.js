class Matchers {
  constructor(example) {
    this.example = example;
  }
  is(expectation) {
    if (this.example === expectation) {
      console.log("All good, dude!");
    } else {
      throw new Error(
        `You better chat with your rubber-duck! We were expecting: ${expectation}, but got ${this.example} instead.`
      );
    }
  }
  isForReal() {
    if (this.example) {
      console.log(`This is true, scout's honor`);
    } else {
      throw new Error(
        `Why you lying? I though we were friends. ${this.example} is nothing more than fugazzi!`
      );
    }
  }
  isFullOfLies() {
    if (!this.example) {
      console.log(
        `This is nothing more than a well elaborated misconstruction of the truth`
      );
    } else {
      throw new Error(
        `Who knew honesty still shines. ${this.example} is being truthful right here`
      );
    }
  }
}

function checkIf(example) {
  return new Matchers(example);
}

function it(testName, fn) {
  console.log(`test: ${testName}`);
  try {
    fn();
  } catch (err) {
    console.log(err);
    throw new Error(`this test literally failed`);
  }
}

function verify(suiteName, fn) {
  try {
    console.log(`suite: ${suiteName}`);
    fn();
  } catch (err) {
    console.log(err.mesage);
  }
}
