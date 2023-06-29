// Mediator pattern is used to reduce communication 
// complexity between multiple objects or classes.
function Mediator() {
	var users = [];

	return {
		addUser: function(user) {
			users.push(user);
		},
		// Message sending business logic
		publishMessage: function(msg, receiver) {
			if(receiver) {
				receiver.messages.push(msg);
			}
			else {
				users.forEach(function(user) {
					user.messages.push(msg);
				});				
			}
		}
	}
}

// Usage Example
var mediator = Mediator(); // Initialize mediator
// Define user class
function User(name) {
	this.name = name;
	this.messages = [];
	mediator.addUser(this);
}
User.prototype.sendMessage = function(msg, receiver) {
	msg = '[' + this.name + ']: ' + msg;
	mediator.publishMessage(msg,receiver);
}

// Initialize users
var u1 = new User('Donald');
var u2 = new User('Peter');
var u3 = new User('Anna'); 
// Message sending
u1.sendMessage('Hi, anybody here?');
u2.sendMessage('Hi Donald, nice to meet you.', u1);
u3.sendMessage('Hi Guys!');
