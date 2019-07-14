function updateDomain() {
  console.log('It update the domain');
  var controler = new Controler();
  var mockdocument = document.createElement('div')
  mockdocument.setAttribute('class', 'title')
  // document.createElement('div').setAttribute('class', 'title')
  // mockdocument[key] = attribute['id']
  console.log(mockdocument)
  // console.log(controler.updateDom())
  assert.isTrue(controler.updateDom(mockdocument) == 'Ciao Luigi');
}
updateDomain()