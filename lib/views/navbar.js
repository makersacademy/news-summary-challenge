(function (exports) {
  function NavBar() {
    function render() {
      return `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">News Bunny</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <button id="home" onclick="returnHome()">Home</button>
              </li>
            </ul>
          </div>
        </nav>
        `
    }
    return {
      render: render
    }
  }
  exports.NavBar = NavBar;
})(this);
