(function(exports) {

  function HeadlinesModel() {
    this.storiesArray = [];
  }

  HeadlinesModel.prototype = {
    getHeadlines: function() {
      
    }
  };

  exports.HeadlinesModel = HeadlinesModel;
})(this);


// (function(exports) {
//   const dotenv = require("dotenv");

//   dotenv.config();

//   const Guardian = require("guardian-js");
//   const api = new Guardian(process.env.GUARDIAN_API, false);

//   function HeadlinesModel() {
//     this.storiesArray = [];
//   }

//   HeadlinesModel.prototype = {
//     sArray: function() {
//       return this.storiesArray;
//     }
//   };

//   exports.HeadlinesModel = HeadlinesModel;
// })(this);

