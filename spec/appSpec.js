document.addEventListener("DOMContentLoaded", function() {
  // test = new Testing;
  // let notebook = new Notebook();
  // let test_note = notebook.create("Rios future!", "Rio will be a :star:")
  // let errors = [];

// Add tests here
//test.saveTest("Describe your test", test.?????(,))
  try {
    // test.saveTest("Notebook creates a new note", test.isInstance(notebook.create("Rios future!", "Rio will be a star and Layla will follow"), Note));
    // test.saveTest("New notes are saved into the notebook", test.isEqual(notebook.notes[1].text,"Rio will be a star and Layla will follow"));
    // console.log(notebook.notes)
    // test.saveTest("Note text is abbreviated", test.isEqual(notebook.abbrev(notebook.notes[1].text),"Rio will be a sta..." ));
    // test.saveTest("converts emoji shortcode to emoji", test.isEqual(test_note.text, "Rio will be a ⭐"));
    // console.log(test_note);
    // console.log(test_note.text);

  } catch (err) {
    console.log(err);
    errors.push(err);
  }

// Prints Tests
  let result = test.printTests();
  document.getElementById("id").innerHTML = result;
  document.getElementById("error").innerHTML = errors.toString().replaceAll(',','');
});
