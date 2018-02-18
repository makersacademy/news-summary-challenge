var test = {

  unit: function(description, test) {
    test();
    console.log(` - ${description}`);
  },

  feature: function(description, test) {
    test();
    console.log(` - ${description}`);
  }

};
