const expect = (testobject) => ({
  toInclude: (value) => {
    if (testobject.includes(value)) {
      return true;
    } else {
      return false;
    };
  },

  toExist: () => {
    if (testobject == undefined) {
      return false;
    } else {
      return true;
    };
  }
});
