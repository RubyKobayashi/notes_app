'use strict';

(function(exports) {
  function Note(text) {
   this.text = text;
 };

 Note.prototype.displayNote = function() {
   return this.text;
 };

exports.Note = Note;
})(this);


//   Note.prototype.language = function () {
//     return ('My favourite language is Javascript');
//   };
//
//   var note = new Note();
//   console.log(note.language());
// }());

// function Note(note){
// this.note = note
//
//
// }
//
// Note.prototype.displayNote = function(){
//   console.log(this.note)
// }
//
// var note = new Note("Buy groceries")
// note.displayNote();
