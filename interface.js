  const httpRequest = new XMLHttpRequest();

  const GUARDIAN_API = "http://content.guardianapis.com/search?";

  let newsDiv = document.getElementsByClassName('container');

  function guardianApiCall() {
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        let newsResponse = JSON.parse(httpRequest.responseText);
        let headline = newsResponse.response.results[0].webTitle;
        let articleLink = newsResponse.response.results[0].webUrl;
        console.log(httpRequest.responseText);
        newsDiv[0].append(headline);
        // newsDiv[0].append(<a href=`${articleLink}`>articleLink</a>);
      }
    }
    httpRequest.open("GET", `${GUARDIAN_API}api-key=${API_KEY}`, true);
    httpRequest.send();
  }

  guardianApiCall();


  // let searchButton = document.getElementById('search-btn');
  // let searchInput = document.getElementById('city-search');
  // let cityName = document.getElementById('city-name');
  // let icon = document.getElementById('icon');
  // let temperature = document.getElementById('temp');
  // let humidity = document.getElementById('humidity-div');
  //
  // function theResponse(response) {
  //   let jsonObject = JSON.parse(response);
  //   cityName.innerHTML = jsonObject.name;
  //   icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  //   temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + " degrees";
  //   humidity.innerHTML = jsonObject.main.humidity + "% humidity";
  // }
