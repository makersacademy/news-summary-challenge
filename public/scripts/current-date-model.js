(function(exports){
  function TodayDate() {
    this.dateToday = (new Date()).toISOString().slice(0, 10);
  }
  exports.TodayDate = TodayDate;
})(this);
