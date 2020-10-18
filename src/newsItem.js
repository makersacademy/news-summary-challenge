class newsItem {
  constructor(apiResponse, id) {
    this.title = apiResponse.webTitle.split(" |")[0]
    this.url = apiResponse.webUrl
    this.api = apiResponse.apiUrl
    this.text = apiResponse.fields.bodyText.substring(0, 500).trim() + "..."
    this.imageSrc = apiResponse.fields.thumbnail
    this.id = apiResponse.id
  }

  formatTitleHTML = (title) => {
    return ('<div><div id="image" style="float:top;"><img style="width:100px;height=100px" src="' + this.imageSrc + '"/><li> </div>' + '<a style="vertical-align:middle; display:table-cell;" href="#/' + this.id + '">' + this.title + '</a></li><div id="'+ this.id +'"></div></div><br></br>  ')
  }

  getSummaryText = () => {
    return this.text + '<a href="'+ this.url + '">see more</a>'
  }


}