//Structure
var obj = {
  name: "My object's name.", 
  objFunc: function () {
    console.log( "Yay! A function!" );
  }
};

//set a new object/function's prototype as another existing one
//here newObj is created with prototype as obj.
var newObj = Object.create( obj );
newObj.gender = 'Female'; 
// Now we can see that one is a prototype of the other
console.log( newObj.name ); //My object's name.
console.log( newObj.gender ); //Female

