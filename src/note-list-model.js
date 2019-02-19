'use strict';

(function(exports){
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.create = function(text) {
    let note = new Note(text)
    this.notes.push(note);
    return note
  };

  NoteList.prototype.showNotes = function() {
    return this.notes
  };

exports.NoteList = NoteList;
})(this);
