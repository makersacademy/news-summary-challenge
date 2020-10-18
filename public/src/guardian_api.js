class GuardianApi { 

  constructor(articleList) {
    this.articleList = articleList
  }

  async comboFunc() {
    var url = "https://content.guardianapis.com/search?q=cats&api-key=bfd99849-df82-444b-8c53-394657557679"
    
    var response = await fetch(url);
    var json = await response.json()

    var list = this.articleList
    var outputData = await json.response.results

    setTimeout(function afterTwoSeconds() {
      
      for (var index = 0; index < outputData.length -1; index++) 
      {list.createArticle(outputData[index].webTitle, outputData[index].webUrl, outputData[index].sectionId)}

    }, 30)
  }
}

var list = new ArticleList
var gApi = new GuardianApi(list)

gApi.comboFunc()
