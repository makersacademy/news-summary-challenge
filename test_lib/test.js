var test_div = document.getElementById('results');

const expect = (testobject) => ({
  toInclude: (value) => {
    return (testobject.includes(value));
  },

  toExist: () => {
    return !(testobject === undefined);
  }
});

const it = (string, test) => {
  test_div.innerHTML += '<div style="display: block">' + string + '</div>';
  test_div.innerHTML += (test ? '<div style="display: block">Test passing</div>': '<div style="display: block">Test failing</div>')
}

const describe = (string, block) => {
  test_div.innerHTML += '<div style="display: block; font-weight: bold">' + string + '</div>';
  block()
}
