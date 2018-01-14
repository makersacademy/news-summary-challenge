class TemplateEngine{
  constructor(){
    this.re = /{{([^}}]+)?}}/g
  }

  modifyHTML(template, context){
    var match;
    while((match = this.re.exec(template.html)) !== null){
      template.html = template.html.replace(match[0], context[match[1]]);
    }
  }
}
