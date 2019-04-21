window.onload = function() {

  (function () {
    assert.isTrue(1 == 1, "one equals one");
  })();

  (function () {
    assert.isTrue(1 == 2, "one equals two");
  })();
}
