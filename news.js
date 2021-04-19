  function fetchData() {

    fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news?show-fields=all").then(response => {
      return response.json();
    }).then(data => {
      console.log(data);

      const html = data.response.results
      .map(result => {
      return `<h2><a href=${result.webUrl}> ${result.webTitle} </a></h2> <img src=${result.fields.thumbnail}>`
    })
    .join("");
      console.log(html);

     document.getElementById("headlines").innerHTML = html;
    })
  };

  fetchData();
