
function send()
{
    var urlvariable;

    urlvariable = "text";

    var ItemJSON;

    ItemJSON = '[  {    "Id": 1,    "ProductID": "1",    "Quantity": 1,  },  {    "Id": 1,    "ProductID": "2",    "Quantity": 2,  }]';

    URL = "https://content.guardianapis.com/search?api-key=5b04ca4c-8fe4-44d9-ac02-4f23b30c04f2"

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.open("POST", URL, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.setRequestHeader('Authorization', 'Basic ' + window.btoa('5b04ca4c-8fe4-44d9-ac02-4f23b30c04f2')); //in prod, you should encrypt user name and password and provide encrypted keys here instead
    xmlhttp.onreadystatechange = callbackFunction(xmlhttp);
    xmlhttp.send(ItemJSON);
    alert(xmlhttp.responseText);
    document.getElementById("div").innerHTML = xmlhttp.statusText + ":" + xmlhttp.status + "<BR><textarea rows='100' cols='100'>" + xmlhttp.responseText + "</textarea>";
}

function callbackFunction(xmlhttp)
{
}
