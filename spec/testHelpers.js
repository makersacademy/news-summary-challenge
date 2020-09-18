let confirm = {
  isTrue: (check) => {
    if (!check) {
      throw new Error('Test failed: ' + check + 'is not truthy');
    }
  },
};
