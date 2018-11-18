(function (exports) {
  function IndexPage() {
    function render() {
      return `
      ${NavBar().render()}
      <div>
      </div>
      `
    }
    return {
      render: render
    }
  }
  exports.IndexPage = IndexPage;
})(this);
