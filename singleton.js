//Structure
var mySingleton = (function() {
  
  function init(options) {
    //some private variables
    var x = '1', y = 2, z = 'Abc', pi = Math.PI;
    //return public methods(accessing private variables if needed.)
    return {
      X : x,
      getPi : function() {
        return pi;
      }
    }
  }
  //There must be exactly one instance of a class, 
  //and it must be accessible to clients from a well-known access point
  var instanceOfSingleton;
  return {
    initialize: function(options) {
      //initialize only if not initialized before
      if(instanceOfSingleton === undefined) {
        instanceOfSingleton = init(options);
      }
      return instanceOfSingleton;
    }
  };

})();

var singleton = mySingleton.initialize();
console.log(singleton.X); //'1'
console.log(singleton.getPi());//3.141592653589793


