module.exports = (a, b) => {
  if (b.includes(a)) return true;

  throw new Error(`${a} is not included in ${b}.`);
};
