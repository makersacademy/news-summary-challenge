function Headline(headline) {
  this.headline = headline;
}

Headline.prototype = (function() {
  function returnHeadline() {
    return this.headline;
  };

  return {
    returnHeadline: returnHeadline
  };
})();
