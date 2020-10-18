"strict mode";

function getData(url, fnToCall) {
  var xmlhttp = new XMLHttpRequest();
  xmlHttpHelper(xmlhttp, url);

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
      var data = xmlhttp.responseText;
      var jsonResponse = JSON.parse(data);
      return fnToCall(jsonResponse);
    }
  };
}

function xmlHttpHelper(xmlhttp, url) {
  xmlhttp.open(
    "GET",
    "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=" + url,
    true
  );
  //console.log(xmlhttp.send());
  xmlhttp.send();
}

function saveJSONResponseAsList(jsonResponse) {
  console.log("json response" + jsonResponse)
  var array = jsonResponse.response.results;
  requestArticlesForEachURL(array);
}

function requestArticlesForEachURL(articleURLArray) {
  return articleURLArray.forEach(function (result) {
    var url = 
    result.apiUrl.slice(0, 4) + result.apiUrl.slice(5) + "?show-fields=all";
    //console.log("result is: " + result.apiUrl + "?show-fields=all")
    //console.log("result: " + result.apiUrl)

   getData(url, saveJSONResponseAsArticle);
  });
}

function saveJSONResponseAsArticle(jsonResponse) {
  var content = jsonResponse.response.content.fields;
  console.log("content is " + content.headline);
  console.log("json is " + jsonResponse);
  controller.addArticle(
    content.headline,
    content.body,
    content.byline,
    content.lastModified,
    content.thumbnail
  );
  console.log("content is now " + content.headline);
  controller.insertListHTML(document.getElementById("headlines"));
}
