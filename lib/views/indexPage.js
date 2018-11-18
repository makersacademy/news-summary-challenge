(function (exports) {
  function IndexPage() {
    function render(data) {
      return `
      ${NavBar().render()}
      <div>
        test
      </div>
      ${ListIndex().render(data)}
      ${Footer().render()}
      `
    }
    return {
      render: render
    }
  }
  exports.IndexPage = IndexPage;
})(this);
