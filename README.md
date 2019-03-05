# The Orchid Website

## Development server

Install all of the dependencies using `yarn`.

Run `ng serve` for a development server. Navigate to
`http://localhost:4200/`. The app will automatically reload if you
change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new
component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

This site has been configured to work with Angular Universal.  The Angular
Universal server can be built with `yarn build:ssr` and run with
`yarn serve:ssr`.  Additionally, `yarn build:static` (or `./static-render.sh`)
can generate a static site tree in `dist/static` by running a recursive `wget`
request over the server.

For more information on the static build script, run `./static-render.sh -h`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the
[Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
