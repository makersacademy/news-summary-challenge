const GUARDIANKEY = "GUARDIANKEY";
const APIKEY = getApiKey();

function  getApiKey(){
  if (localStorage.getItem(GUARDIANKEY) === null){
    let key = null;
    key = prompt("Please enter your Guardian API key");
    localStorage.setItem(GUARDIANKEY, key);
  }
  return localStorage.getItem(GUARDIANKEY);
}
