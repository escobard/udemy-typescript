import 'reflect-metadata'

class Plane {
  color: string = 'red'

  @markFunction('Some secret data')
  fly (): void {
    console.log('vrrrrrr')
  }
}

function markFunction(secretInfo: string) {
  return function(target: Plane, key: string){
    // defines metadata to Plane.key
    /// key is the key of the method attached to the declarator
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };

}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

console.log(secret)