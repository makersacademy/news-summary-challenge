// Variables
let page;
page = document.documentElement;

// Functions
function it(label, callback) {
  console.log(label);
  callback();
}

function expect(expected) {
  return {
    toEqual(actual) {
      if (expected === actual) {
        console.log("Pass");
      } else {
        console.warn("Fail");
      }
    },
    toNotEqual(actual) {
      if (expected !== actual) {
        console.log("Pass");
      } else {
        console.warn("Fail");
      }
    },
  };
}

function pageHasContent(str) {
  if (page.textContent.includes(str)) {
    console.log("page has content!");
  } else {
    console.warn("page doesn't have content!");
  }
}

function pageDoesNotHaveContent(str) {
  if (page.textContent.includes(str)) {
    console.log("page doesn't have content!");
  } else {
    console.warn("page has content!");
  }
}

function fillInContentById(id, content) {
  document.getElementById(id).value = content;
}

function clear() {
  noteList = [];
  fillInContentById("addNoteField", "");
  notePList.innerText = "";
}
