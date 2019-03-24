(async function(exports) {

  function HeadlinesModel() {
    this.storiesArray = [];
  }

  HeadlinesModel.prototype = {
    getHeadlines: async function() {

      const key = "4c416dfc-6a89-4aea-8d14-c49c988d9b60";
      let section = "politics";

      const Http = new XMLHttpRequest();

      const source = "https://content.guardianapis.com/search?"
                 + "section=" + section
                 + "&api-key=" + key;

      console.log("Selected endpoint: " + source);

      Http.open("GET", source);
      Http.send();
      Http.onload=(e)=>{
        let res = Http.responseText;

        let parsed = JSON.parse(res);
        
        parsed.response.results.forEach(element => {
          params = {
            link: element.webUrl,
            headline: element.webTitle,
          };

          let newStory = new StoryModel(params);
          // console.log(newStory.getHeadline());
          this.storiesArray.push(newStory);
        });
        return Promise.resolve;
      };
    },
  };

  exports.HeadlinesModel = HeadlinesModel;
})(this);

// let newHeadlines = new HeadlinesModel();

// newHeadlines.getHeadlines();

// const Http = new XMLHttpRequest();
// const url='https://jsonplaceholder.typicode.com/posts';
// Http.open("GET", url);
// Http.send();
// Http.onreadystatechange=(e)=>{
// console.log(Http.responseText)
// }

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

