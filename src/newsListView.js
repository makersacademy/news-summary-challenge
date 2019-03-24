(function(exports) {

  function NewsListView(newsStories = new NewsStories()) {
    this._list = newsStories._newsStoriesArray;
  };

  NewsListView.prototype = {
    format: function() {
  console.log('inside the NLV format function...')
      var text = ""
  console.log("this.list ")
  console.log(this._list)
  var arr = this._list
  arr.forEach(function(x) {
  console.log(x)
  });
  var arr2 = [{num: "1"}, {num: "2"}, {num: "3"}]
  console.log(arr2)
  var arr3 = []

  arr2.forEach(function(x) {
  console.log(x.num)
  arr3.push({first: x.num, second: x.num})
  });
  console.log(arr3)
  console.log('titles... ' + this._list[0][0])
  console.log(this._list)
      this._list.forEach(newsStory => {
  console.log('hello')
  console.log("NLV: " + newsStory.title)
        text += "<li><div>" + newsStory.title + "</div></li>"
      })
      return "<ul>" + text + "</ul>"
    }
  };

  exports.NewsListView = NewsListView

})(this);
