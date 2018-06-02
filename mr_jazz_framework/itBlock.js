function it(testText, test) {
  jaz.consoleArray.push(testText + ',')
  jaz.before[0]();
  test();
};
