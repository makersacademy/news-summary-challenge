function checkEqual(actual, expected) {
  if (actual === expected) {
    displayTests('Well Done!') 
  } else {
    displayTests(`Nope! Try again as you expected ${expected}, but got ${actual}`)
  }
}

function checkTrue(actual) {
  if (actual === true) {
    displayTests('Well Done!') 
  } else {
    displayTests(`Nope! Try again as you expected true, but got ${actual}`)
  }
}

function checkFalse(actual) {
  if (actual === false) {
    displayTests('Well Done!') 
  } else {
    displayTests(`Nope! Try again as you expected false, but got ${actual}`)
  }
}

