//Structure
function aFunction(a,b) {
  this.a = a;
  this.b = b;
}

aFunction.prototype.protoFunction = function(){
  return this.a;
}

var aA = new aFunction('a','b');
console.log(aA.protoFunction());//'a';

