(function(exports) {
  function fakeFetch(url) {
    res =
    {
      response:
      {
        results:
        [
          {
            "id": "1",
            "webTitle": "this is headline 1"
          },
          {
            "id": "2",
            "webTitle": "this is headline 2"
          }
        ]
      }
    }
    return new Promise(function(resolve, reject) {
      resolve(res)
    });
  }

  exports.fakeFetch = fakeFetch
})(this)

// window.fetch = fakeFetch
