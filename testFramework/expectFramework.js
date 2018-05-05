function expect(x) {
  return {
    toEqual: function(y){
      if (x === y) {
        console.log();
      };
    };
  };
};
