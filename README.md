# AtAlternativeInteractionSolution

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.
This project is incomplete and is more of a proof-of-concept idea, rather than a fully-fledged recipe website. It explores an alternate way of interacting with a website: by having a camera read hand gestures.

## Implemented Gestures
Common gestures: 
* Two open hands = ingredient popup if applicable
* Two closed hands = forward
* one closed hand =  close modal, back
* open hand = search bar focus, if applicable
* 2 point = quick jump instructions if applicable
* 1 point =  quick jump top

Custom Gestures:  
* 1 point one open = scroll up
* 1 point one closed = scroll down

## Future things to do
* Swipe gestures for "tabbing" through navbar and recipe bullets
* Adjust camera to not lag so much when starting
* Enable searchbar functionalities

# Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



