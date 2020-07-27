  function americanpie(date) {

  var seconds = Math.floor((new Date() - new Date(date)) / 1000);

  var year = 31536000
  var month = 2592000
  var day = 86400
  var hour = 3600
  var minute = 60
  
  var interval = Math.floor(seconds / year);

  if (interval > 1) {
    return interval + " years ago";
  }

  interval = Math.floor(seconds / month);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / day);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / hour);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / minute);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";

}