(function (exports) {
  function IndexPage() {
    function render(req) {
      return `
      ${NavBar().render()}
      <div>
        test
      </div>
      ${ListIndex().render(req)}
      ${Footer().render()}
      `
    }
    return {
      render: render
    }
  }
  exports.IndexPage = IndexPage;
})(this);
