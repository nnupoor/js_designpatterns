//only common data here is model and brand, 
//and created a flyweight object, that saves memory
var Car = function(model, brand) {
  this.model = model;
  this.brand = brand;
}

//carFactory using the common car model/method
var carFactory = (function() {
  var existingCars = {}, existingCar;
  return {
    createCar: function(model, brand) {
      existingCar = existingCars[model];
      if (!!existingCar) {
        return existingCar;
      }
      var car = new Car(model, brand);
      existingCars[model] = car;
      return car;
    }
  }
})();

//carProductionManager using the common car model/method
var carProductionManager = (function() {
  var carDb = {};
  return {
    addCar: function(carId, model, brand, color, carType){
      var car = carFactory.createCar(model, brand);
      carDb[carId] = {
          color: color,
          type: carType,
          car: car
      }
    },
    repaintCar: function(carId, newColor) {
      var carData = carDb[carId];
      carData.color = newColor
    }
  }
})();
