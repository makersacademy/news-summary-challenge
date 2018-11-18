(function (exports) {
  function Footer() {
    function render() {
      return `
        <!-- Footer -->
        <footer class="page-footer font-small blue">

        <!-- Copyright -->
          <div class="footer-copyright text-center py-3">Powered By:
            <a href="https://newsapi.org/s/bbc-news-api">newsapi.com</a>
          </div>
        <!-- Copyright -->

        </footer>
        <!-- Footer -->
      `
    }
    return {
      render: render
    }
  }
  exports.Footer = Footer;
})(this);
