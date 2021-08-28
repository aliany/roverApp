# RoverApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.


# Develop an api that moves a rover around on a grid.
	
You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
	
The rover receives a character array of commands.
	
Implement commands that move the rover forward/backward (f,b).
	
Implement commands that turn the rover left/right (l,r).
	
Implement wrapping from one edge of the grid to another. (planets are spheres after all)
	
Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point and reports the obstacle.



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
