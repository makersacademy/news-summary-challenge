class BaseController{
  constructor(router = new Router('app')){
    this.router = router;
    window.onhashchange = this.hashChanged.bind(this);
    window.location.hash = "#home"
    this.hashChanged();
  }

  hashChanged(ev){
    console.log(window.location.hash);
    if(window.location.hash.length > 0){
      var pageName = window.location.hash.substr(1);
      this.loadPageController(pageName);
    }
  }

  loadPageController(pageName){
    pageName = "get_" + pageName
    console.log(pageName);
    // Execute if a method matching pageName exists else pagenotfound
    try{
      this[pageName]();
    } catch(TypeError){
      //console.log(err);
      this.get_PageNotFound();
    };
  }

  get_PageNotFound(){
    this.router.render('not_found');
  }
}
