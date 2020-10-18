class Assert {
  static isTrue(text, assertionToCheck) {
    if (!assertionToCheck) {
      return " Assertion failed: " + text + " is not truthy"; //,
      // "background-color: floralwhite; color: red"
      // );
    } else {
      return " Smashed it: " + text; //, "background-color: floralwhite; color: green"
      //);
    }
  }
  static isEqual(text, expected, output) {
    if (expected === output) {
      var warning = "";
      if ((expected || output) === (null || undefined)) {
        warning =
          '<h1 style="color:red";>WARNING: comparing null or undefined </h1>';
      }
      return " Smashed it: " + text + warning;
    } else {
      return (
        " Assertion failed: " +
        text +
        " is not truthy" +
        "<br></br>-Expected:<b> " +
        expected +
        "</b>  but got: <b> " +
        output +
        "</b>"
      );
    }
  }
}

// (function (exports) {
//   var assert = {
//     isTrue: function (assertionToCheck) {
//       if (!assertionToCheck) {
//         throw new Error(
//           "Assertion failed: " + assertionToCheck + " is not truthy"
//         );
//       }
//     },
//     isEqualTo: function (a, b) {
//       if (a !== b) {
//         throw new Error("Assertion failed: " + a + " is not equal to" + b);
//       }
//     },
//     isConstructedFrom: function (object, constructor) {
//       if (object instanceof constructor === true) {
//         throw new Error(
//           "Assertion failed: " +
//             object +
//             " is not an instance of " +
//             constructor
//         );
//       }
//     },
//   };
//   exports.assert = assert;
// })(this);

//adds a div container within the specClass div for the tests
addHTML = function (html, id) {
  const placeHolder = document.getElementById(id);
  const newDiv = document.createElement("div");
  placeHolder.appendChild(newDiv);
  newDiv.innerHTML = html;
};
//returns colour of test based on output content
getColour = function (statementOutput) {
  if (statementOutput.match(/failed/) != null) {
    return "red";
  } else if (statementOutput.match(/Smashed/) != null) {
    return "green";
  }
};
//formats output for putting into the html
formatHTML = function (array) {
  stem = "";
  for (var i = 0; i <= array.length - 1; i++) {
    stem +=
      '<li style="color:' + getColour(array[i]) + ';">' + array[i] + "</li> ";
  }
  return stem;
};
//adds a parent div for all specs
classParentDiv = function (className) {
  const newDiv = document.createElement("div");
  const classId = quineda(className);
  newDiv.setAttribute("id", classId);
  document.body.appendChild(newDiv);
  document.getElementById(classId).innerHTML =
    "<h2>" + classId.replace(/([A-Z])/g, " $1").trim() + "</h2>";
};
// kinda like a quine, not really, but i like the name and needed to get the class name as  a string
quineda = function (className) {
  var instance = new className();
  return instance.constructor.name;
};
//returns evaluated  functions from each spec class in an array
getFunctions = function (className) {
  console.log(className.toString().match(/static\s[a-zA-Z]+(\(\))/g));
  var uncutFunctions = className.toString().match(/static\s[a-zA-Z]+(\(\))/g);
  var evaluatedFunctions = [];
  for (let i = 0; i <= uncutFunctions.length - 1; i++) {
    uncutFunctions[i] = eval(
      quineda(className) + "." + uncutFunctions[i].replace("static ", "")
    );
    evaluatedFunctions.push(uncutFunctions[i]);
    //console.log(uncutFunctions[i])
  }
  return evaluatedFunctions;
};
//runs above functions to populate specrunnerpage
runSpec = function (className) {
  classParentDiv(className);
  var classInstance = new className();
  //console.log(classInstance.constructor.name)
  addHTML(formatHTML(getFunctions(className)), classInstance.constructor.name);
};
