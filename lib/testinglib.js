// get the testResults div to pass to

let testResults = document.getElementById('testResults')

// display results on the page testResults div

function displayResults (result) {
  testResults.insertAdjacentHTML('beforeend', result);
}

// testing functions

function describe (description, callback) {
  displayResults(`<a class='desc'>${description}</a><br>`)
  callback()
}

function it (description, callback) {
  displayResults(`<a class='it'>${description}</a>`)
  callback()
}

function expect (thing) {
  return {
    toEqual: function (otherThing) {
      if (thing == otherThing) {
        displayResults(`<a class='pass'>Pass</a><br>`)
      } else {
        displayResults(`<a class='fail'>Fail</a><br>`)
      }
    },
    toBe: function (otherThing) {
      if (thing === otherThing) {
        displayResults(`<a class='pass'>Pass</a><br>`)
      } else {
        displayResults(`<a class='fail'>Fail</a><br>`)
      }
    },
    toEqualArray: function (otherThing) {
      if (thing.length === otherThing.length && thing.every((v, i) => v === otherThing[i])) {
        displayResults(`<a class='pass'>Pass</a><br>`)
      } else {
        displayResults(`<a class='fail'>Fail</a><br>`)
      }
    }
  }
}
