module.exports = (mock, method) => {
  if (mock._count[method] > 0) return true;

  throw new Error(`Expected ${mock}.${method} to have been called but it has not been.`)
};
