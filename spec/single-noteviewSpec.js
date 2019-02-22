
  function testSingleNoteView() {
    var notelist = new NoteList()
    var note1 = notelist.create("Go shopping")
    var singleNoteView = new SingleNoteView(note1)
    assert.isEqual(singleNoteView.display() === "<ul><div><li>Go shopping</li></div></ul>")
  };


testSingleNoteView();
