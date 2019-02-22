'use strict';

(function(exports){
  function SingleNoteView(note) {
   this.note = note;
  };

  SingleNoteView.prototype.display = function() {
   var html = "<ul>"
   var html_string = "<div><li>" + this.note.displayNote() + "</li></div>"
   return html + html_string + "</ul>"
  };

exports.SingleNoteView = SingleNoteView;
})(this);
