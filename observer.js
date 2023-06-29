function theSubject(){
  this.handlerList = [];
}

theSubject.prototype = {
  addObserver: function(obs) {
    //add all the observers in an array.
    this.handlerList.push(obs);
    console.log('added observer', this.handlerList);
  },
  removeObserver: function(obs) {
    //remove given observer from the array.
    for ( var ii=0, length = this.handlerList.length; ii<length; ii++ ) {
      if(this.handlerList[ii] === obs) {
          this.handlerList.splice(ii--,1);
          length--;
          console.log('removed observer', this.handlerList);
      }
    }
  },
  notify: function(obs, context) {
    //for all functions in handler, notify
    var bindingContext = context || window;
    this.handlerList.forEach(function(fn){
        fn.call(bindingContext, obs);
    });
  }
};

function init() {
    var theEventHandler = function(item) { 
        console.log("fired: " + item); 
    };
 
    var subject = new theSubject();
 
    subject.addObserver(theEventHandler); //adds the given function in handler list
    subject.notify('event #1'); //calls the function once.
    subject.addObserver(theEventHandler); // adds the given function one more time
    subject.removeObserver(theEventHandler); //removes this function twice from the function list
    subject.notify('event #2'); //notify doesn't call anything
    subject.addObserver(theEventHandler); //adds the function again
    subject.notify('event #3'); //calls it once with event 3
}

init();