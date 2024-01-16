import 'reflect-metadata';
import { RequestHandler } from "express";
import { MetadataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler){
  return function(target: any, key: string, desc: PropertyDescriptor){
    // returns an array in case no middlewares have been assigned yet
    const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];
    // adds middleware to available middlewares & saves new middlewares data
    Reflect.defineMetadata(MetadataKeys.middleware, [...middlewares, middleware], target, key)

  }


}