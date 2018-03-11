function Container() {
  this.all =[];
  this.url = 'http://content.guardianapis.com/search?from-date='
  + getFormattedDate() +
  '&to-date='
  + getFormattedDate() +
  '&order-by=newest&show-tags=editors-picks&page=1&page-size=200&api-key=349ff0e6-2b64-430b-af95-7538e0728a36';
}
function getFormattedDate() {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return str;
}


List.prototype.addNote = function(note) {
  this.notes.push(note);
}
