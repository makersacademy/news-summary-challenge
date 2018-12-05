(function (exports) {
  function IndexPage() {
    function render(articles) {
      return `
      ${NavBar().render()}
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
