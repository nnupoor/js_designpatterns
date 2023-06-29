// You should use proxy pattern when you want to extend a
// class functionality without changing its implementation

/****************
  Original Class
 ****************/
function Hotel(stars, isCityCenter, isNew, numberOfRooms, avgRoomSize) {
	this.stars = stars;
	this.isCityCenter = isCityCenter;
	this.isNew = isNew;
	this.numberOfRooms = numberOfRooms;
	this.avgRoomSize = avgRoomSize;
}
Hotel.prototype = { // Define getters and setters
	getStars: function() {
		return this.stars;
	},
	setStars: function(starsRate) {
		this.stars = starsRate;
	},
	isCityCenter: function() {
		return this.isCityCenter;
	},
	toggleCenter: function() {
		this.isCityCenter = !this.isCityCenter;
	},
	isNew: function() {
		return this.isNew;
	},
	toggleNew: function() {
		this.isNew = !this.isNew;
	},
	getNumberOfRooms: function() {
		return this.numberOfRooms;
	},
	setNumberOfRooms: function(num) {
		this.numberOfRooms = num;	
	},
	getAvgRoomSize: function() {
		return this.avgRoomSize;
	},
	setAvgRoomSize: function(newAvg) {
		this.avgRoomSize = newAvg;
	}
}


/****************
      Proxy
 ****************/
var HotelProxy = function(stars, isCityCenter, isNew, numberOfRooms, avgRoomSize) {
	// Create Hotel Instance
	var hotel = new Hotel(stars, isCityCenter, isNew, numberOfRooms, avgRoomSize);
	// Private function
	function scoreByStars(stars) {
		switch(stars) {
			case(5):
				return 6;
			case(4):
				return 5;
			case(3): 
				return 3;
			case(2):
				return 1.5;
			default:
				return 0.5;
		}
	}
	// Extend hotel instance
	Object.assign(hotel, {
		getScore: function() {
			var score = scoreByStars(hotel.stars);
			if(hotel.isCityCenter) {
				score += 2;
			}
			if(hotel.isNew) {
				score += 1.5;
			}
			if(hotel.numberOfRooms > 5000) {
				score += 0.5;
			}
			return score;
		},
		getHotelRoomsVolume: function() {
			return hotel.numberOfRooms * hotel.avgRoomSize;
		}
	});
	
	// Return extended instance
	return hotel;
}

// Usage example
var hp = HotelProxy(4, true, false, 2800, 150);
console.log(hp.getScore()); // 7
console.log(hp.getHotelRoomsVolume()); // 420000
hp.setAvgRoomSize(160);
console.log(hp.getHotelRoomsVolume()); // 448000
hp.setStars(5);
console.log(hp.getScore()); //8
