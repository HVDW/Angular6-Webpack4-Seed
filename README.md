# Angular 6 Webpack 4 Seed

This Angular 6 seed is custom build with Webpack 4 and has minimal features to be able to have a clean start as quickly as possible.

## Install

Run `yarn` or `npm install` to install all the packages needed

## Development server

Run `yarn start` or `npm start` for a dev server. Navigate to `http://localhost:4000/`.

The app will automatically reload if you change any of the source files (Hot Module Replacement, HMR). If you like to change the port of the dev server you can do that in the `webpack.config.js` file.

## Build

Run `yarn build` or `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

This build is a production build meaning it is a AOT compilation to reduce size of the bundles. It also splits code into multiple packages to serve only the components and functionality that a user needs and to keep vendor packages separate for caching advantages.

## Further plans

I want to add some extra features:

- routing
- unit testing via Karma

## Known issues

When building or starting a dev server you will get a warning which is an open issue at the Angular team:
[Angular issue 21560](https://github.com/angular/angular/issues/21560)
