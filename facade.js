//Structure and example
//Facading hides complexities from the user.
var mouse = (function() {
  var privates = {
    getActivity: function(act) {
      var activity = act.toLowerCase();
      if(activity === 'click') {
        return "User is clicking";
      } else if (activity === 'hover') {
        return "User is hovering";
      } else if (activity === 'rightclick') {
        return "User right clicked";
      } else if (activity === 'scroll') {
        return "User scrolled"
      } else {
        return "Unrecognised activity";
      }
    }
  }

  return {
    facade: function(activity) {
      return privates.getActivity(activity);
    }
  }
})();

console.log(mouse.facade('hover')); //User is hovering

