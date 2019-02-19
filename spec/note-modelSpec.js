
  function testDisplayNote() {
    var note = new Note("Go shopping");
    assert.isTrue(note.displayNote() === "Go shopping")
  };

  testDisplayNote();
