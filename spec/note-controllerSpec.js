
function testisNoteController(){
  let constructor_name = "NoteController"
  var notelist = new NoteList()
  var notecontroller = new NoteController(notelist)
  assert.isNoteController(notecontroller.__proto__.constructor.name === constructor_name)
}

// function TestHTMLlist(){
//
// }


testisNoteController();
