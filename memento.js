// Memento pattern is used to restore state of an object to a previous state. 
function Memento(initialState) {
	var state = initialState || null;
	var stateList = state ? [state] : [];

	return {
		getState: function() {
			return state;
		},
		getStateList: function() {
			return stateList;
		},
		get: function(index) {
			if(index > -1 && index < stateList.length) {
				return stateList[index];
			}
			else {
				throw new Error('No state indexed ' + index);
			}
		},
		addState: function(newState) {
			if(!newState)
				throw new Error('Please provide a state object');
			state = newState;
			stateList.push(newState);
		}
	} 
}

// Helper function used to deep copy an object using jQuery
function copy(obj) {
	return jQuery.extend(true, {}, obj);
}

// Example Usage, please notice that using this pattern, you should
// not mutate objects or arrays, but clone them, since they are passed
// by reference in javascript.
// If your state is a string or a number however, you may mutate it.
var songs = {
	Queen: ['I want to break free', 'Another on bites the dust', 'We will rock you'],
	Scorpins: ['Still loving you', 'Love will keep us alive', 'Wind of change'],
	Muse: ['Butterflies and hurricanes', 'Starlight', 'Unintended'],
	BeeGees: ['How deep is your love', 'Staying alive']
}

var memento = Memento(copy(songs)); // Initialize Memento
songs.BeeGees.push('Too much heaven');
songs.Muse.push('Hysteria');
memento.addState(copy(songs)); // Add new state to memento
songs['Abba'] = ['Mama mia', 'Happy new year'];
songs['Eric Clapton'] = ['Tears in heaven', 'Bell bottom blues'];
memento.addState(copy(songs)); // Add new state to memento
console.log(memento.getStateList()); // log state list
console.log(memento.getState()); // log current state
console.log(memento.get(1)); // log second state
songs = memento.get(0); // set songs to initial state
memento.addState(copy(songs)); // Add new old state to memento
console.log(memento.getStateList()); // log state list
