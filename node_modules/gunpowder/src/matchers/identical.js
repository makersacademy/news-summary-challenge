module.exports = (a, b) => {
  if (a == b) return true;

  throw new Error(`The values are not identical.\n\nFound: ${a}\nWanted: ${b}`);
};
