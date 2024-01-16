import 'reflect-metadata';
import { MetadataKeys } from "./MetadataKeys";

// takes an array of keys to be validated
export function bodyValidator(...keys: string[]){
  return function(target: any, key: string, desc: PropertyDescriptor): void{
    Reflect.defineMetadata(MetadataKeys.validator, keys, target, key);
  }
}