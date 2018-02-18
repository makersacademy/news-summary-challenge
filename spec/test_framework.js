function addSuccessDiv (message) {
  newDiv = createDiv("success", message);
  var currentDiv = document.getElementById('div1');
  currentDiv.appendChild(newDiv);
}

function addErrorStack(err) {
  messageDiv = createDiv("fail", 'Failure: ' + err);
  stackDiv = createDiv("stack", err.stack);

  locationDiv = createDiv("location", err.fileName + ' at ' + err.lineNumber + ':' + err.columnNumber );

  failureDiv = createDiv("failure", "");
  failureDiv.appendChild(messageDiv);
  failureDiv.appendChild(stackDiv);
  failureDiv.appendChild(locationDiv);

  var currentDiv = document.getElementById('div1');
  currentDiv.appendChild(failureDiv);
}

function createDiv(id, text) {
  var Div = document.createElement("div");
  Div.id = id;
  var message = document.createTextNode(text);
  Div.appendChild(message);
  return Div;
}

var it = function(message, tester) {
       try{
         tester()
         addSuccessDiv(message)
       }
       catch(err) {
          addErrorStack(err)
       }

}


var assert = {
  isTrue: (value, message) => {
    if(!value) {
      throw new Error(`Failure: It should be true but is false...`)
     }
},

  equals: (actual, expected) => {
    if(actual != expected) {
     throw new Error(`Failure!!!! Expected: ${expected}, Actual: ${actual}`)
    }
  },

  hasContent: function(id, string) {
    var innerText = document.getElementById(id).innerHTML;
    if(!innerText.includes(string))  {
      throw new Error(`Expected: ${string}, but we got ${innerText}`)
    }
  },
  
  doesntHaveContent: (id, string) => {
    var innerText = document.getElementById(id).innerHTML;
    if (innerText.includes(string)) {
      throw new Error(`Expected: ${string} to not be present in ${innerText}`)
    };
  }

}

//feature tests
function fillInForm(id, string) {
  document.getElementById(id).value = string
}

function clickButton(id) {
  document.getElementById(id).click();
}

function clickLink(id) {
  document.getElementById(id).click();
}
