"use strict"

function Newspaper(parent){

  this.newslist = [];
  this.newslist2 = [];


  (function(parent){

    function populate(data){
      this.newslist2 = [["headline1","summary1","details1"],["headline2","summary2","details2"],["headline3","summary3","details3"],["headline4","summary4","details4"]];
      this.newslist = data;
      })
    }

    function view_headlines(){
      return this.newslist
    }

    function view_summary(index){
      return this.newslist[index][1]
    }

    function view_details(index){
      return this.newslist[index][2]
    }

    parent.view_headlines = view_headlines
    parent.view_summary = view_summary
    parent.view_details = view_details
    parent.populate = populate

  })(this);

}
