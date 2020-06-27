window.addEventListener("DOMContentLoaded", (event) => {
  intro = prepareElement("h1", "Starting tests...");
  tests = document.createElement("ul");
  tests.setAttribute("id", "tests");
  document.body.append(intro, tests);
});

function it(description, test) {
  window.addEventListener("DOMContentLoaded", (event) => {
    assertions = [];

    let result;
    let output;

    try {
      test();
      if (assertions.length === 0) {
        output = prepareElement("li", description + " - No expects");
        output.setAttribute("class", 'alert');
      } else {
        result =
          assertions.indexOf(false) === -1 && assertions.indexOf(true) !== -1
            ? "pass"
            : "fail";
        output = prepareElement("li", description);
        output.setAttribute("class", result);
      }
    } catch (error) {
      output = prepareElement("li", description + " - " + error);
      output.setAttribute("class", "fail");
    } finally {
      document.getElementById("tests").append(output);
    }
  });
}

function expect(a) {
  return {
    toEqual: (b) => {
      assertions.push(a === b);
    },
    returnHTML: (b) => {
      assertions.push(a.outerHTML === b);
    }
  };
}

function prepareElement(element, text) {
  text = document.createTextNode(text);
  let tag = document.createElement(element);
  tag.appendChild(text);
  return tag;
}
