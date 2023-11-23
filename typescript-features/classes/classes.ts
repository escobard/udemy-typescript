class Vehicle {
  // defines variables to use in the class
  // color: string;

  // constructor is called on class initiation
/*  constructor(color: string){
    this.color = color;
  }*/

  // abbreviated method to define a public class variable
  constructor(public color: string) {}

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
  public drive(): void {
    console.log('vroom!');
  }
}

const vehicle = new Car('red');
console.log(vehicle.color)