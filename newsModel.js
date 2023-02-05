
class NewsModel {

  constructor(){
    this.storyData = [];
  };


  getStoryData() {
    if (!this.storyData.response) {
      return [];
    }
    return this.storyData.response.results;
    // return this.storyData.response.results;
  }

  setStoryData(data) {
    this.storyData = data;
  }

}

// // notesModel.js

// class NotesModel {
//   constructor() {
//      this.notes = [];
//   }

//   getNotes() {
//      return this.notes;
//   }

//   addNote(note) {
//      this.notes.push(note);
//   }

//   reset() {
//      this.notes = [];
//   }
// }

module.exports = NewsModel;