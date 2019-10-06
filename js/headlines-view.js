(function(exports) {
  class HeadlinesView {
    constructor() {
    }

    returnHTMLString(data) {
      let results = data.response.results;
      let length = results.length;
      let HTMLString = '';
      for (let i = 0; i < length; i++) {
        let id = results[i].id;
        let headline = results[i].fields.headline;
        let thumbnail = results[i].fields.thumbnail;
        HTMLString += `<div><a href="#${id}"><img src="${thumbnail}"><br>${headline}</a></div><br>`;
      }
      return HTMLString;
    }

    insertHTMLString(obj, string) {
      obj.innerHTML = string;
    }
  }

  exports.HeadlinesView = HeadlinesView;
})(this);