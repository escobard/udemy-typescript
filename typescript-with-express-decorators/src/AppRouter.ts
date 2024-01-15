import express from 'express'

// sets up a singleton class, which will act as a wrapper for all our controller classes
export class AppRouter {
  private static instance: express.Router;

  static getInstance(): express.Router {
    // if there is no router instance, create one
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    // otherwise return existing router instance - for cases where router instance already exists
    return AppRouter.instance;
  }
}