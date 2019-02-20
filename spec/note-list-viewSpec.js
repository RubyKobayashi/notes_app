
  function testNoteListView() {
    var notelist = new NoteList()
    var note1 = notelist.create("Go shopping")
    var note2 = notelist.create("Clean")
    var noteListView = new NoteListView(notelist)
    assert.isEqual(noteListView.display() === "<ul><li><div>Go shopping</div></li><li><div>Clean</div></li></ul>")
  };


testNoteListView();
