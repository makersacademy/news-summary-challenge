var assert = {
  isTrue: function(assertionToCheck, testDescription) {
    if (!assertionToCheck) {
      throw new Error(`Test failed: ${testDescription}. ${assertionToCheck} is not truthy. Is it d-d-destiny, d-destiny? Or is it just a game in my mind, Sharona?`)
    } else {
      console.log(`Test passed (${testDescription}). WHOA! M-m-m-my Sharona!`)
    }
  }
}