//


(function(exports) {
  function NoteController(noteListModel) {
   noteListModel.create("Favourite drink: seltzer")
   this.noteListView = new NoteListView(noteListModel)
 };


 NoteController.prototype.htmlInsert = function(){
   return this.HTML().innerHTML = this.noteListView.display()
   // let results = this.noteListView.display()
   // document.getElementById("app").innerHTML = results
 }

 NoteController.prototype.HTML = function(){
   return document.getElementById('app')
 }

exports.NoteController = NoteController;
})(this);


// window.onload = function(){
//   var notelist = new NoteList();
//   var controller = new NoteController(notelist);
//   controller.htmlInsert()
//
// }
