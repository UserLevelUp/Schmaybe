# Schmaybe - Log file monitoring utility

Judiciously used ChatGPT and Gemini to help create log monitoring app called Schmaybe.  It grabs the line number and any new line when it detects a change to the log file its monitoring.  Along with the name of the file and the actual line.

# python - server info

Please go to the readme.md file in the proto-api folder.  The server uses websockets port 8765 and sends messages to any client that is listening.   A simple test client can be called as well to test the server is sending messages for a log file that it is --monitoring.

# Angular

The Angular Web site is a client that uses websockets to listen to the server that is monitoring on a specific port 8765 which is currently hard code.

# NgUserLevelUp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

*Show list of ports reserved*

<pre>PS C:\Users\marcn\source\repos\User-Level-Up\ngUserLevelUp> netsh interface ipv4 show excludedportrange protocol=tcp</pre>

## npm run commands

*Start Off by just typing*

<pre>npm run</pre>

* This will list all the npm run commands
* and find the buid command

<pre> npm run build</pre>

* Also beware of the npm run install and npm run install-only commands.

  
 Read readme.md inside of proto-api


