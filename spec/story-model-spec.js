function TestStoryModel() {
  console.log("Testing the StoryModel");
}

TestStoryModel.prototype = {
  canBeInstantiated: function () {
    console.log("Tests that a StoryModel object can be instantiated");

    let newStory = new StoryModel();
  }
};

let testingStoryModel = new TestStoryModel();

testingStoryModel.canBeInstantiated();


// Code is in a file called note-model.js.
// Code is wrapped in the module pattern.
// Uses the constructor and prototype pattern to define a note model object that can be instantiated.
// Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.
// Stores the text in a text property on the note.
// Has a method that will return the note text.