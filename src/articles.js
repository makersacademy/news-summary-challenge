class Articles {

  constructor () {
    this.headlinesList = []
    this.testHeadlinesList = []
  }

  getHeadlines() {
    return this.headlinesList
  }

  pushTestHeadlines(){
    let obj = {}
    let objTwo = {}
    obj.title = "Test 1"
    obj.id = "Test 1"
    obj.subjectTitle = "Sports"
    obj.section = "American Football"
    obj.url = "www.test1.com"
    this.testHeadlinesList.push(obj);

    objTwo.title = "Test 2"
    objTwo.id = "Test 2"
    objTwo.subjectTitle = "Lifestyle"
    objTwo.section = "Love"
    objTwo.url = "www.test2.com"
    this.testHeadlinesList.push(objTwo);

  }


}