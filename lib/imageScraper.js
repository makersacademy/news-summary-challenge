class ImageScraper {
  constructor() {
    this.BASE_URL = "https://scraper-box.p.rapidapi.com/browseurl?url="
  }

  xhrHTML(url) {
    var data = null;

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("GET", this.BASE_URL + url);
    xhr.setRequestHeader("x-rapidapi-host", "scraper-box.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", config.scraperBoxApiKey);
    
    xhr.send(data);

  }

  fetchHTML(url) {
    fetch(this.BASE_URL + url, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "scraper-box.p.rapidapi.com",
        "x-rapidapi-key": config.scraperBoxApiKey
      }
    })
    .then(response => {
      console.log(response);
    })
  }

}
