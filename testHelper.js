const describe = (description, fn) => {
  console.log(description);
  fn();
}

const it = (message, fn) => {
  describe(' ' + message, fn)
}

const expect = (expectation) => ({
  toEq: (assertion) => {
    if (expectation === assertion) {
      console.log('Pass')
    } else {
      console.log('Fail')
    }
  }
})