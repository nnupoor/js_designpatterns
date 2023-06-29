// Visitor lets you define a new operation without changing 
// the class of the elements on which it operates.

// Define 'Counter' Class
var Counter = function(initVal) {
  this.count = initVal || 0;
};

Counter.prototype.increment = function() {
  this.count++;
};

// Let a visitor access any properties of a
// 'Counter' instance by calling ìts 'visit'
// function on 'this'
Counter.prototype.accept = function(visitor) {
  visitor.visit.call(this);
};

// Create a visitor object that will decrement
// the counter
var visitor = {
  visit: function() {
    this.count--;
  }
};

// Usage example
var counter = new Counter;

counter.accept(visitor);
console.log(counter.count); // -1

// Alternatively, one might permanently bind
// the visit funtion to the 'Counter' instance
Counter.prototype.accept = function(visitor) {
  visitor.visit = visitor.visit.bind(this);
};

counter.accept(visitor);
visitor.visit();
console.log(counter.count); // -2