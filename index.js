console.log("hello console");
console.log("hello again");

const fetchArticle = () => {
  fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/2021/dec/05/raab-says-formal-party-in-no-10-last-christmas-would-have-broken-rules?show-fields=body")
  .then(response => response.json())
  .then(data => console.log(data));
};
fetchArticle();
