# Schmaybe - Log file monitoring utility
I thoughtfully used ChatGPT and Gemini to develop a log monitoring app called Schmaybe. The app captures the line number and any new line in a log file. When it detects a change in the log file, it transmits the last line as JSON through WebSockets to any clients listening. It also includes the name of the file and the line number.  Also the name Schmaybe has been around for a long time but has also been used in sci fi books by Craig Alanson who wrote several series including the Expeditionary Force and has an interesting character named Skippy who always seems to badger his friend and arch nemesis Joe Bishop.  When Skippy responds to Joe when Joe urgently needs some ask to save humanity and if Skippy can help, Skippy responds simply by sometimes saying, "Schmaybe!"

[Watch the demo video on YouTube](https://www.youtube.com/watch?v=3JaMzK0okIM)

Currently in alpha release.

A business scenario for using this log monitoring tool: A CEO comes to a product owner and asks them if their web server is up and if it is producing results.  Now you can legitimately respond by saying, "Schmaybe!"  The reason is that this tool was specially tailored to hone in on the exciting stuff in a log file.

# python - server info

Please make sure to refer to the readme.MD file in the proto-API folder. The server utilizes WebSockets on port 8765 to send messages to any listening client. You can also use a simple test client to ensure the server sends messages for a log file it monitors.

# Angular (Remove)

Boring angular stuff on how to set up and use Angular. 

The Angular Web site is a client that uses web sockets to listen to the server monitoring on a specific port 8765, which is currently hardcoded.

# NgUserLevelUp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.4.   Has been consistently updated since.  The most recent update is Angular 18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. You must first add a package that implements end-to-end testing capabilities to use this command.

## Further help

For more help on the Angular CLI, use `ng help` or the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

*Show list of ports reserved*

<pre>PS C:\Users\marcn\source\repos\User-Level-Up\ngUserLevelUp> netsh interface ipv4 show excludedportrange protocol=tcp</pre>

## npm run commands

*Start Off by just typing*

<pre>npm run</pre>

* This will list all the npm run commands
* and find the buid command

<pre> npm run build</pre>

* Also, beware of the need to  use npm run install and npm run install-only commands.

  
 Read readme.md inside of proto-api folder.


