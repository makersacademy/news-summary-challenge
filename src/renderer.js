(function(exports) {
  function Renderer() {
  }

Renderer.prototype.view = function(values) {
  for(var key in values) {
    document.getElementById(key).innerHTML = values[key];
  }
};

exports.Renderer = Renderer;
})(this);
