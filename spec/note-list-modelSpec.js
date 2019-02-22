// console.log(1 + assert.isEqual)
// console.log(2 + assert.isNote)
// console.log(3 + assert.checkNotes)


  function testCreate(){
    // debugger
    var notelist = new NoteList()
    var note = notelist.create("Go shopping")
    testisNote(note)
    testDisplayNote()
  }

  function testShowNotes(){
    var notelist = new NoteList()
    var note1 = notelist.create("Go shopping")
    var note2 = notelist.create("Clean")
    // console.log(notelist.showNotes)
    var test_array = [note1, note2]
    for (i = 0; i < notelist.showNotes().length; i++ ){
    assert.checkNotes(notelist.showNotes()[i].displayNote() === test_array[i].displayNote())
    }
    // assert.isEqual(notelist.showNotes() === [note)
  }


  testCreate();
  testShowNotes();
