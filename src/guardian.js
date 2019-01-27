var myKey = config.MY_KEY

class Guardian {
  constructor (request = new XMLHttpRequest()){
    this.request = request;
    this.list = [];
  };

    requestHeadlines () {
    this.request.open('Get', `https://content.guardianapis.com/uk-news?show-editors-picks=true&api-key=de43dc95-a4c8-4652-bc9a-25b1fd275dcc`, true)
  };

  onLoad () {
    return JSON.parse(this.request.response)
  };

  completeRequest() {
    this.request.send()
  }

}
