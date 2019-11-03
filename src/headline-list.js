'use strict';

(function(exports) {

function HeadlineList(){
  this.LIST = []
}

HeadlineList.prototype.returnlist = function(){
  return this.LIST
}

HeadlineList.prototype.addheadline = function(headline){
  this.LIST.push(headline)
}

exports.HeadlineList = HeadlineList;
})(this);
