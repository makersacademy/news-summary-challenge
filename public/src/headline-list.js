function HeadlineList() {
  this.list = [];
};

HeadlineList.prototype.add = function(headline) {
  this.list.push(headline);
} 

HeadlineList.prototype.returnList = function() {
  return this.list;
}