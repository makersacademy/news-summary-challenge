function fillIn(id, content){
document.getElementById(id).value = content;
}

function click(id){
 document.getElementById(id).click();
}

function hasContent(string){
  str = document.documentElement.innerHTML;
  if (str.includes(string)) {
    testPass("content appears in document")
  } else { testFailed("content does not appear in document") }


}
