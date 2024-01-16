import 'reflect-metadata';

// decorator factory for get paths
/// variable decorator factory, wrapped one more function scope, allows us to dynamically define method type for the declarator
function routeBinder(method: string) {
  return function(path: string) {
    // a tip - using any types is OK for initial function development, but should be swapped out for real types later
    return function(target: any, key: string, desc: PropertyDescriptor): void {
      // assigns the path: path key/value metadata to target.key
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }
}

// binds method / creates metadata for each HTTP request method
export const get = routeBinder('get');
export const post = routeBinder('post');
export const put = routeBinder('put');
export const del = routeBinder('delete');