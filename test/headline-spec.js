// As a busy politician
// I can see all of today's headlines in one place
// So I know what the big stories of the day are

(function(exports) {
  function generatesHeadline() {
    headline = new Headline();
    assert.isTrue(headline.generate() === "This is a fake headline");
  }

  generatesHeadline();
})(this);
