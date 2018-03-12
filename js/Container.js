function Container() {
  this.all =[];
  this.url = '<insert your api key here>';
}
function getFormattedDate() {
    var date = new Date();
    var str = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return str;
}
