// As a busy politician
// I can see all of today's headlines in one place
// So I know what the big stories of the day are

(function(exports) {
  function showsHeadline() {
    headline = new Headline();
    assert.isTrue(headline.display() === "This is a fake headline");
  }

  showsHeadline();
})(this);
