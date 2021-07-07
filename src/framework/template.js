class Template{
  constructor(html, engine = new TemplateEngine){
    this.html = html;
    this.engine = engine;
  }

  evaluateHTML(context){
    //context is object of {identifier: replacement}
    this.engine.modifyHTML(this, context);
  }
}
