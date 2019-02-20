'use strict';

(function(exports){
  function NoteListView(notelist) {
   this.notelist = notelist;
  };

  NoteListView.prototype.display = function() {
   var html = "<ul>"
   for (i = 0; i < this.notelist.showNotes().length; i++ ){
    html  += ("<li><div>" + this.notelist.showNotes()[i].displayNote() + "</div></li>")
   }
   return html + "</ul>"
  };

exports.NoteListView = NoteListView;
})(this);
