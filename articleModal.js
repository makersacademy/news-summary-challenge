(function showNoteBodyInModal() {
  var itemArray = Array.from(document.getElementsByTagName("LI"));
  console.log(Array.from(document.getElementsByTagName("LI")));
  console.log(document.getElementsByTagName("LI"));


  itemArray.forEach(function(listContainerItem) {
    console.log(listContainerItem);
    listContainerItem.onclick = function() {
      var modalText = document.getElementById('modalText');
      console.log(modalText);
      var listContainerItemIndex = itemArray.indexOf(listContainerItem);
      modalText.innerHTML = "hello";
      modal.style.display = "block";
    };
  });
})();

