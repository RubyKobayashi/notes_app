var assert = {
  isEqual: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
        console.log('Pass')
      }
    },


  isNote: function(assertionToCheck){
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('Pass')
    }
  },

  checkNotes: function(assertionToCheck){
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log('Pass')
    }
  },




};
