class Test {
  constructor(description, steps) {
    this.description = description
    this.testSteps = steps
    this.testWindow = undefined
    this.result = {}
  }

  setWindow(testWindow) {
    this.testWindow = testWindow;
  }
}
