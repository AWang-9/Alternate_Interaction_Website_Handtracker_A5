# TODO LIST

Current List:
* Ensure all gestures work


Completed:
* Create Reference page (DONE)
* implement gestures into home page (DONE)
* implement gestures into references and search page (DONE)
* make all gestures less sensitive (track it at least X times before acting) DONE 
* Fix navbar spacing
* Fix text going underneath the video square
* Fix Video buttons and move them to the left (DONE)
* fix all recipes page cosmetics
* Make the camera always be running (Nice to have, not necessary)
* Add background colors to ingredient cards
* Add background colors to instruction cards
* Add background colors to the recipe cards (can all be default)



Nice to have list:
* figure out how to navigate navbar with arrowkeys, then replace 
* figure out how to swipe to navigate through the ingredients
* point to check/check off


Implemented Gestures
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



# Sources


Navbar: 
https://www.c-sharpcorner.com/article/lets-develop-an-angular-application-5-create-navigation-bar-component-for/ 
https://www.w3schools.com/bootstrap/bootstrap_navbar.asp
https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
https://www.geeksforgeeks.org/how-to-place-content-under-fixed-flexbox-navigation-bar/
https://stackoverflow.com/questions/40346890/how-to-i-align-vertical-buttons-next-to-image


Ingredient card components:
https://material.angular.io/components/categories
https://getbootstrap.com/docs/5.0/components/card/

Brownie recipe used: 
https://www.loveandlemons.com/brownies-recipe/ (you should try them: they're really good!)

Modal Code: 
https://jasonwatmore.com/post/2020/09/24/angular-10-custom-modal-window-dialog-box (ALL CREDIT TO THIS SAINT SINCE I COULDN'T FIGURE IT OUT ON MY OWN)
https://stackoverflow.com/questions/39627549/how-to-center-modal-to-the-center-of-screen/39636961


Gestures:
https://stackoverflow.com/questions/14832603/check-if-all-values-of-array-are-equal

Scrolling:
https://stackoverflow.com/questions/5007530/how-do-i-scroll-to-an-element-using-javascript

Focus input:
https://stackoverflow.com/questions/50006888/set-focus-on-input-element?answertab=active#tab-top

Cards:
https://getbootstrap.com/docs/4.0/components/card/
https://getbootstrap.com/docs/5.0/layout/gutters/
https://stackoverflow.com/questions/7245018/how-to-evenly-distribute-elements-in-a-div-next-to-each-other/7247189
https://getbootstrap.com/docs/5.0/helpers/stretched-link/

Layout Inspiration:
https://www.healthline.com/ 
https://chloeting.com/recipes/
https://www.loveandlemons.com/brownies-recipe/ 

Banners:
https://www.w3schools.com/howto/howto_css_hero_image.asp



# AtAlternativeInteractionSolution

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.

## Development server

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
