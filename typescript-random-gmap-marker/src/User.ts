import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

// implements creates a dependency between this class and the Mappable interface
/// tells typescript to ensure the user class has the right properties to implement Mappable interface
/// doesn't seem to make a difference with webstorm?
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: faker.address.latitude(),
      lng: faker.address.longitude()
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}