var eval = {
  isTrue: function(parameter) {
    if (!parameter) {
      throw new Error("Evaluation failed: " + parameter + " is not truthy");
    } else {
      console.log('True');
    }
  },

  doesInclude: function(text, target) {
    if (!text.includes(target)) {
      throw new Error("Evaluation failed: Coudln't find " + target + " in " + text);
    } else {
      console.log('True');
    }
  }

};
