(function(exports) {
  function PingPongRenderer() {}

  PingPongRenderer.prototype.view = function(values) {
    for (var key in values) {
      document.getElementById(key).innerHTML = values[key];
    }
  };

  exports.PingPongRenderer = PingPongRenderer;
})(this);
