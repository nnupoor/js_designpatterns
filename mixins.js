//Structure and Example
var mixins = {
  get: function(){
    console.log( "get this item" );
  },
  set: function(){
    console.log( "set this item" );
  },
  delete: function(){
    console.log( "delete it right away!" );
  }
};
 
// Another skeleton constructor
function aConstructor(){
  this.thatIsAllFolks = function(){ 
    console.log('Nope! I refuse to do anything anymore!!!')
  };
}
 
// Extend both protoype with our Mixin
for(var key in mixins) aConstructor.prototype[key] = mixins[key];
 
// Create a new instance of aConstructor
var myMixinConstructor = new aConstructor();

myMixinConstructor.get(); //get this item
myMixinConstructor.thatIsAllFolks(); //Nope! I refuse to do anything anymore!!!
