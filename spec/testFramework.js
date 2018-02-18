

function addSuccessDiv(message) {
  newDiv = createDiv('success', message);
  const currentDiv = document.getElementById('div1');
  currentDiv.appendChild(newDiv);
}

function addErrorStack(err) {
  messageDiv = createDiv('fail', `Failure: ${err}`);
  stackDiv = createDiv('stack', err.stack);

  failureDiv = createDiv('failure', '');
  failureDiv.appendChild(messageDiv);
  failureDiv.appendChild(stackDiv);

  const currentDiv = document.getElementById('div1');
  currentDiv.appendChild(failureDiv);
}

function createDiv(id, text) {
  const Div = document.createElement('div');
  Div.id = id;
  const message = document.createTextNode(text);
  Div.appendChild(message);
  return Div;
}

const it = function (message, tester) {
  try {
    tester();
    addSuccessDiv(message);
  } catch (err) {
    addErrorStack(err);
  }
};


const assert = {
  isTrue: (value, message) => {
    if (!value) {
      throw new Error('Failure: It should be true but is false...');
    }
  },

  equals: (actual, expected) => {
    if (actual != expected) {
      throw new Error(`Failure!!!! Expected: ${expected}, Actual: ${actual}`);
    }
  },

  hasContent(id, string) {
    const innerText = document.getElementById(id).innerHTML;
    if (!innerText.includes(string)) {
      throw new Error(`Expected: ${string}, but we got ${innerText}`);
    }
  },

  doesntHaveContent: (id, string) => {
    const innerText = document.getElementById(id).innerHTML;
    if (innerText.includes(string)) {
      throw new Error(`Expected: ${string} to not be present in ${innerText}`);
    }
  },

};

// feature tests
function fillInForm(id, string) {
  document.getElementById(id).value = string;
}

function clickButton(id) {
  document.getElementById(id).click();
}

function clickLink(id) {
  document.getElementById(id).click();
}
