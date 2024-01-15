import 'reflect-metadata'

@printMetadata
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

// declarators for class must specify the constructor function of the class as an argument
/// typeof Class - returns the class' constructor
function printMetadata(target: typeof Plane) {
  // loop through all keys (methods) in the class
  for (let key in target.prototype) {
    // tries to find Class.prototype.key.secret metadata key
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret)
  }
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')

console.log(secret)