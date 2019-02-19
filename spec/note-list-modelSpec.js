
  function testCreate(){
    var notelist = new NoteList()
    var note = notelist.create("Go shopping")
    isNote(note)
    testDisplayNote()
  }

  function testShowNotes(){
    var notelist = new NoteList()
    var note1 = notelist.create("Go shopping")
    var note2 = notelist.create("Clean")
    console.log(notelist.showNotes)
    var test_array = [note1, note2]
    for (i = 0; i < notelist.showNotes().length; i++ ){
      if(!notelist.showNotes()[i].displayNote() === test_array[i].displayNote()){
        throw new Error("Not equal")
      } else {
        console.log('Pass')
      }


    }
    // assert.isEqual(notelist.showNotes() === [note)
  }


  testCreate();
  testShowNotes();
