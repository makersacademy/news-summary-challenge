'use strict';

;(function (exports) {
  
  exports.ListController = function (options) {

    var container = document.getElementById(options.containerId);
    var listModel = options.listModel;
    var listView = new options.ListView(listModel);
    var counter = 0;

    function showListItem() {
      counter++;
      container.innerHTML += (listView.listItemToHTML(counter));
    }
  
    return {
      showListItem: showListItem
    }

  }
  
})(this);
