//


(function(exports) {
  function NoteController(noteListModel) {
   noteListModel.create("Favourite drink: seltzer")
   this.noteListView = new NoteListView(noteListModel)
 };


 NoteController.prototype.htmlInsert = function(){
   let results = this.noteListView.display()
   document.getElementById("app").innerHTML = results
 }

exports.NoteController = NoteController;
})(this);


window.onload = function(){
  var notelist = new NoteList();
  var controller = new NoteController(notelist);
  controller.htmlInsert()

}
