'use strict';

(function(exports){
  function NoteList() {
  };

  NoteList.prototype.create = function(text) {
    return new Note(text);
  };

exports.NoteList = NoteList;
})(this);
