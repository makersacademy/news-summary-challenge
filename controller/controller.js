function Controller(Headlines) {
  this.content = Headlines
};

// var SecretKey = "https://content.guardianapis.com/search?api-key=1adbcffe-98b5-4af3-a187-4886d9b3171b"

Controller.prototype.insertHeadlines = function() {
  document.getElementById('headlines').innerHTML = this.content.makeList();
};
