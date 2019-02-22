
  function testNoteListView() {
    var notelist = new NoteList()
    var note1 = notelist.create("Go shopping")
    var note2 = notelist.create("Clean")
    var noteListView = new NoteListView(notelist)
    assert.isEqual(noteListView.display() === "<ul><div><li>Go shopping</li></div><div><li>Clean</li></div></ul>")
  };


testNoteListView();
