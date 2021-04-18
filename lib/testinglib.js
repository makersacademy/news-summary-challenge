// test library true

let testing = true

// load index.html on to the test page

document.getElementById("indexDisplay").innerHTML='<object type="text/html" data="index.html" id="index" style="width: 100%; height: 800px;"></object>';

// get the testResults div to pass to

let testResults = document.getElementById('testResults')

// display results on the page testResults div

function displayResults (result) {
  testResults.insertAdjacentHTML('beforeend', result);
}

// testing functions

function describe (description, callback) {
  displayResults(`<br><br><a class='desc'>${description}</a>`)
  callback()
}

function it (description, callback) {
  displayResults(`<br><a class='it'>${description}</a>`)
  callback()
}

function expect (thing) {
  return {
    toEqual: function (otherThing) {
      if (thing == otherThing) {
        displayResults(`<a class='pass'>Pass</a>`)
      } else {
        displayResults(`<a class='fail'>Fail</a>`)
      }
    },
    toBe: function (otherThing) {
      if (thing === otherThing) {
        displayResults(`<a class='pass'>Pass</a>`)
      } else {
        displayResults(`<a class='fail'>Fail</a>`)
      }
    },
    toEqualArray: function (otherThing) {
      if (thing.length === otherThing.length && thing.every((v, i) => v === otherThing[i])) {
        displayResults(`<a class='pass'>Pass</a>`)
      } else {
        displayResults(`<a class='fail'>Fail</a>`)
      }
    },
    toEqualArrayOfObjects: function (otherThing) {
      if (thing.length === otherThing.length && thing.every((v, i) => JSON.stringify(v) === JSON.stringify(otherThing[i]))) {
        displayResults(`<a class='pass'>Pass</a>`)
      } else {
        displayResults(`<a class='fail'>Fail</a>`)
      }
    }
  }
}
