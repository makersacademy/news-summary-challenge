function headLineIsAbleToBeCreated(){
  var webTitle ;
  var webUrl ;
  var headLine = new HeadLine(webTitle, webUrl);
  assert.isTrue(headLine.webTitle === webTitle);
  assert.isTrue(headLine.webUrl === webUrl);
}

headLineIsAbleToBeCreated()
