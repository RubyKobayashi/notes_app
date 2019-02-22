
  function testNoteListView() {
    var notelist = new NoteList()
    var note1 = notelist.create("Go shopping")
    var note2 = notelist.create("Clean")
    var noteListView = new NoteListView(notelist)
    assert.isEqual(noteListView.display() === "<ul><div><li>Go shopping</li></div><div><li>Clean</li></div></ul>")
  };

  function testNoteCharLength(){
    var notelist = new NoteList()
    var note1 = notelist.create("Go shopping cmdfkwz fmgktptlsmxsls")
    var note2 = notelist.create("Clean cmdkdlvjovmoskwdkfjf")
    var noteListView = new NoteListView(notelist)
    console.log(noteListView.display())
   assert.isEqual(noteListView.display() === "<ul><div><li>Go shopping cmdfkwz</li></div><div><li>Clean cmdkdlvjovmos</li></div></ul>" )
  }


testNoteListView();
testNoteCharLength();
