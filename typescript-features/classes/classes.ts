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
  // child class must abide by parent class constructor
  constructor(public wheels: number, color: string){
    // child class passes color argument to parent class with super()
    super(color);
  }

  // child class can override parent class function
  public drive(): void {
    console.log('vroom!');
  }
}

const vehicle = new Car(4, 'red');
console.log(vehicle.color)