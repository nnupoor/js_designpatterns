//Structure 
function functionA () {
  this.a = function() { return 'a'; }
}

function describeA ( anA ) {
  var aa = anA.a();

  anA.a = function () {
    return 'An "' + aa + '" is the first alphabet in English and the most important one.'
  }
}

var anA = new functionA();

describeA( anA );//here aa='a'

var output = anA.a();

console.log(output); //'An a is the first alphabet in English and the most important one.'

