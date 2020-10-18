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
    return ('<div style="display:inline-flex;flex-wrap:wrap;flex-direction:row;width:300px;border:5px solid black;"><div id="image" style="float:top;"><img style="width:300px;height=300px" src="' + this.imageSrc + '"/> </div>' + '<a style="vertical-align:middle; display:table-cell;" href="#/' + this.id + '">' + this.title + '</a><div id="'+ this.id +'"></div></div><br></br>  ')
  }

  getSummaryText = () => {
    return this.text + '<a href="'+ this.url + '">see more</a>'
  }


}