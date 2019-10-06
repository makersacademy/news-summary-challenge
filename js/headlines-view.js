(function(exports) {
  class HeadlinesView {
    constructor() {
    }

    returnHTMLString(data) {
      let results = data.response.results;
      let length = results.length;
      let HTMLString = '';
      for (let i = 0; i < length; i++) {
        let webUrl = results[i].webUrl;
        let headline = results[i].fields.headline;
        let thumbnail = results[i].fields.thumbnail;
        HTMLString += `<div><a href="${webUrl}"><img src="${thumbnail}"><br>${headline}</a></div><br>`;
      }
      return HTMLString;
    }

    insertHTMLString(obj, htmlString) {
      obj.innerHTML = htmlString;
    }
  }

  exports.HeadlinesView = HeadlinesView;
})(this);