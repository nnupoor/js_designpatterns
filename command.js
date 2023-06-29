//Remarks: Taken from feedback on Reddit.
//The only reason to have the Command Pattern is if your language doesn't have functions/lambdas as a first-class construct. 
//A Command object is a poor-mans function.
//This is/was true of Java (depending on which version you're running), 
//but is not true of Javascript, making the Command Pattern in Javascript completely pointless.

//Structure and example
var commandPattern = (function(){
  var commandSet = {
    doSomething: function(arg1, arg2) {
      return "This is argument 1 "+ arg1 + "and this is arg 2 "+ arg2;
    },
    doSomethingElse: function(arg3) {
      return "This is arg 3 "+arg3;
    },
    executeCommands: function(name) {
      return commandSet[name] && commandSet[name].apply( commandSet, [].slice.call(arguments, 1) ); //gives arguments list
    }
  }
  return commandSet;
  
})();

commandPattern.executeCommands( "doSomethingElse", "Ferrari", "14523" );
commandPattern.executeCommands( "doSomething", "Ford Mondeo", "54323" );
