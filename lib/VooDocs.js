// VooDoo
// ======

// A Javascript testing framework, which outputs results in browser

// Setup - Recommended file tree
// -----------------------------

/project-folder
  /public
    voodooStyle.css
  /lib
    voodoo.js
  /spec
    -all spec files-
  /src
    -all source files-
  SpecRunner.html

// Remember to add all necessary files as scripts in the SpecRunner.html file
//  - (the SpecRunner prompts you to do this)

// Setup - Example test notation
// -----------------------------

// in spec file
var testList = [
  // Test 1
  function() {
    voodooMatcher("Test Description",
    value.toBeTested,
    expectedOutcome
    )
  },

  // Test 2
  function() {
    voodooMatcher("Test Description",
    function.toBeTested,
    function.arguments
    )
  },
]

voodoo(testList)

// Running Tests
// -------------

// To run tests simply copy the file path to the SpecRunner.html file and open
// in a browser, tests will then automatically run and display results
