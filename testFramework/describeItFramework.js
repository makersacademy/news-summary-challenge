console.log("describeItFramework.js loaded");

function it(string, expectationCallback){
  console.log("  It: " + string);
  return expectationCallback();
};

function describe(string, itCallback){
  console.log("\n" + "Describe: " + string + "\n\n");
  return itCallback();
};
