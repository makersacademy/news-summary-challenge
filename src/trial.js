function trial () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();

oReq.addEventListener("load", trial);
// oReq.open("GET", "http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=f67ebf16-cebc-42d4-bfad-a91971cd21f5");
// oReq.open("GET", "https://content.guardianapis.com/politics?api-key=f67ebf16-cebc-42d4-bfad-a91971cd21f5")
oReq.open("GET", `https://content.guardianapis.com/politics?order-by=newest&api-key=f67ebf16-cebc-42d4-bfad-a91971cd21f5`)
oReq.send();
