(function(exports) {
  //
  // function url(){
  //   return this.guardianapis = "https://content.guardianapis.com/search?api-key="+MyKey
  // }
let api = "851c438c-1135-430d-b04e-f4a69a51fdb5"

  function NewsSummary(){
    this.allheadlines = []
    this.guardianapis = "https://content.guardianapis.com/search?api-key="+api
  }

  NewsSummary.prototype.shownews = function () {
    fetch(this.guardianapis)
    .then(res => {
    return res.json();
  }).then(data => {
    this.allheadlines = (data.results);
    console.log(data)
  }).catch(function(error){
    console.log(JSON.stringify(error));
  });
}

  exports.NewsSummary = NewsSummary;

})(this)
