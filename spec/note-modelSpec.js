
  function testDisplayNote(note = new Note("Go shopping")) {
    assert.isEqual(note.displayNote() === "Go shopping")
  };

  function isNote(note){
    let constructor_name = "Note"
    assert.isNote(note.__proto__.constructor.name === constructor_name)
  }


  testDisplayNote();
  isNote(new Note('Hello'))
