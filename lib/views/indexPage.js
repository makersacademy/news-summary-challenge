(function (exports) {
  function IndexPage() {
    function render(articles) {
      return `
      ${NavBar().render()}
      <div>
        test
      </div>
      ${ListIndex().render(articles)}
      ${Footer().render()}
      `
    }
    return {
      render: render
    }
  }
  exports.IndexPage = IndexPage;
})(this);
