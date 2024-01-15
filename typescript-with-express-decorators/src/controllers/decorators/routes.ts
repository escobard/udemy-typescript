import 'reflect-metadata';

// decorator factory for get paths
/// {} declaration specifies that while return is invoked nothing is returned from the function
//// {} return types usually specify that a function callback was invoked within the return scope of the function
export function get(path: string): {} {
  // a tip - using any types is OK for initial function development, but should be swapped out for real types later
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    // assigns the path: path key/value metadata to target.key
    Reflect.defineMetadata('path', path, target, key)
  }
}