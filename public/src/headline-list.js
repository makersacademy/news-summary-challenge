function HeadlineList() {
  this.list = [];
};

HeadlineList.prototype.add = function(headline, url) {
  this.list.push({title: headline, url: url});
} 

HeadlineList.prototype.returnList = function() {
  return this.list;
}