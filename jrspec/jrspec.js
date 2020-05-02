window.addEventListener("DOMContentLoaded", (event) => {
  intro = prepareElement('h1', 'Starting tests...')
  tests = document.createElement('ul')
  tests.setAttribute('id','tests')
  document.body.append(intro, tests)
});

function it(description, test) {
  window.addEventListener("DOMContentLoaded", (event) => {
    let assertions = [];

    function expect(a) {
      return {
        toEqual: (b) => {
          assertions.push(a === b);
        },
      };
    }

    let result;
    let output;

    try {
      test();
      result = assertions.indexOf(false) === -1 || assertions.length === 0 ? 'pass' : 'fail';
      output = prepareElement('li', description)
      output.setAttribute('class', result)
    } catch (error) {
      output = prepareElement('li', description + " - " + error)
      output.setAttribute('class', 'fail')
    } finally {
      document.getElementById('tests').append(output)
    }
  });
}

function prepareElement(element, text) {
  text = document.createTextNode(text);
  let tag = document.createElement(element);
  tag.appendChild(text);
  return tag;
}