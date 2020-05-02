window.addEventListener("DOMContentLoaded", (event) => {
  intro = prepareElement('h1', 'Starting tests...')
  tests = document.createElement('ul')
  tests.setAttribute('id','tests')
  document.body.append(intro, tests)
});

function it(description, test) {
  window.addEventListener("DOMContentLoaded", (event) => {
    assertions = [];
    test();
    result = assertions.indexOf(false) === -1 ? 'pass' : 'fail';
    output = prepareElement('li', description)
    output.setAttribute('class', result)
    document.getElementById('tests').append(output)
    count++
  });
}

function expect(a) {
  return {
    toEqual: (b) => {
      assertions.push(a === b);
    },
  };
}

function prepareElement(element, text) {
  text = document.createTextNode(text);
  let tag = document.createElement(element);
  tag.appendChild(text);
  return tag;
}