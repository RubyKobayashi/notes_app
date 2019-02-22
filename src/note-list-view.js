'use strict';

(function(exports){
  function NoteListView(notelist) {
   this.notelist = notelist;
  };

  NoteListView.prototype.display = function() {
   var html = "<ul>"
   for (var i = 0; i < this.notelist.showNotes().length; i++ ){
    html  += ("<div><li>" + this.notelist.showNotes()[i].displayNote() + "</li></div>")
   }
   return html + "</ul>"
  };

exports.NoteListView = NoteListView;
})(this);
