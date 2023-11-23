class Vehicle {
  // function type & return definition with TS
  /// protected methods can be accessed by child class
  protected drive(): void {
    console.log('chugga chugga');
  }

  public honk(): void {
    console.log('honk');
  }
}

// a car is a type of vehicle
class Car extends Vehicle {
  // child class can overide parent class function
  protected drive(): void {
    console.log('vroom!');
  }
}

const vehicle = new Car();
vehicle.drive();
vehicle.honk();