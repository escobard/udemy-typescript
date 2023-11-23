
interface Vehicle {
    name: string;
    // can use complex value, like a date
    year: Date;
    broken: boolean;
    // how to define a function in an interface
    /// function that returns a string
    summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

// very long annotation, how do we fix this? interface!
/*const printVehicle = (vehicle: { name: string; year: number; broken: boolean }) => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year ${vehicle.year}`);
    console.log(`Broken? ${vehicle.broken}`);
};*/

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);