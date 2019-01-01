
function NewsList() {
  this.newslist = [];
}

NewsList.prototype.storeNews = function(rawlist) {
  console.log(rawlist)
  var self = this;
  rawlist.forEach(function(n) {
    self.newslist.push( {
      title: n.webTitle,
      body: n.fields.body,
      url: n.webUrl,
      thumbnail: n.fields.thumbnail
    })
  })

  // var self = this;
  // for (i = 0; rawlist[i]; i++) {
  //   self.newslist[i] = {
  //     title: rawlist[i].webTitle;
  //     body: rawlist[i].body
  //   }
  // }
};

