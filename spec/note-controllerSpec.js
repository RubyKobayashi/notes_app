
function testisNoteController(){

  function MockNoteList () {
  }

  MockNoteList.prototype.create = function () {
  }

  let constructor_name = "NoteController"
  var notelist = new MockNoteList()
  var notecontroller = new NoteController(notelist)
  assert.isNoteController(notecontroller.__proto__.constructor.name === constructor_name)
}



  function TestHTMLlist(){
    var notelist = new NoteList()
    var noteController = new NoteController(notelist);

    noteController.HTML = function(){
      var doc = document.createElement('app')
      doc.innerHTML = "<div id='app'><li>hello</li></div>"
      // console.log(doc.htmlInsert)
      return doc
    }

    // console.log(noteController.htmlInsert())
    assert.isEqual(noteController.htmlInsert() === "<ul><div><li>Favourite drink: seltzer</li></div></ul>")
    console.log("TestHTMLlist is passing")
  }


testisNoteController();
TestHTMLlist();
