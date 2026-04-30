# Sarita Nimwal Portfolio

Personal portfolio built with Angular 11, Bootstrap, Angular Material, and AOS animations.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload when source files change.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts are stored in `dist/MyPortfolio/`.

Run `npm run build:firebase` to create a production build in `public/MyPortfolio/`, which is the folder configured for Firebase Hosting in `firebase.json`.

## Projects Section

The `/projects` route is lazy-loaded from `src/app/projects/` and includes:

- `DashboardComponent`: Highcharts line, bar, and pie charts with Angular Material cards.
- `MapComponent`: Angular Google Maps markers with clickable info windows.

Required packages:

```bash
npm install highcharts@9.3.3 @angular/google-maps@11.2.13 --legacy-peer-deps
```

Set `googleMapsApiKey` in `src/environments/environment.ts` and `src/environments/environment.prod.ts` to enable
the live Google Maps demo. Without a key, the app shows a local interactive map preview so the portfolio never renders
Google's broken-map error panel.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `npm run test:ci` for a one-time headless test run.

## Lint

Run `npm run lint` to check TypeScript and Angular lint rules.

## Node compatibility

This Angular 11 project uses a Webpack version that needs OpenSSL legacy provider support on modern Node.js versions. The npm scripts call the Angular CLI through `node --openssl-legacy-provider` so the project works on current Node installations.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
