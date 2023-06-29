//Structure
var a = (function(){
  //private variables & methods
  var privateVar = 'X';
  //public methods and variables
  return {
    getX: function(){
      return privateVar;
    }
  }
})();

a.getX(); //X

