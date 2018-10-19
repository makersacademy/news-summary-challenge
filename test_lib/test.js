var test_div = document.getElementById('test');

const expect = (a) => ({
  toEqual: (b) => {
    return a === b;
  },

  toExist: () => {
    return a !== undefined;
  },

  toInclude: (b) => {
    return a.includes(b);
  },

  toBeLessThan: (b) => {
    return a < b;
  },
})

const it = (string, test) => {
  var test_div = document.getElementById('test');
  console.log(test())
  test_div.innerHTML += '<div style="display: block">' + string + '</div>';
  test_div.innerHTML += (test() ? '<div style="display: block">Test passing</div>': '<div style="display: block">Test failing</div>')
}

const describe = (string, block) => {
  test_div.innerHTML += '<div style="display: block; font-weight: bold">' + string + '</div>';
  block()
}
