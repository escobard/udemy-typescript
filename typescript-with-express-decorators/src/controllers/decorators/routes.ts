import 'reflect-metadata';

// decorator factory for get paths
export function get(path: string){
  // a tip - using any types is OK for initial function development, but should be swapped out for real types later
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    // assigns the path: path key/value metadata to target.key
    Reflect.defineMetadata('path', path, target, key)
  }
}