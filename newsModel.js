class NewsModel {
  constructor() {
    this.repoInfo = null
  }

  setRepoInfo(repoInfo) {
    this.repoInfo = repoInfo
  }

  getRepoInfo() {
  this.repoInfo = repoInfo;
  }
}
  // addNote(note) {
  //   this.model.push(note)
  // }

  // reset() {
  //   this.model = []
  //   return this.model
  // }
  
  // setNotes(notes) {
  //   this.model = notes
  // }


module.exports = NewsModel;