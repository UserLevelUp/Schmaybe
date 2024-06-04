# Log Monitoring Server

## Description
This server monitors specific log files for updates and notifies connected clients when changes occur. It is designed to work with multiple programming languages and can be integrated into various system environments.

## Command Line Arguments
- `--log-path <path>`: Specifies the path to the log file to be monitored.
- `--port <number>`: Sets the port number on which the server will listen for incoming client connections.
- `--verbose`: Enables verbose output for debugging purposes.
- `--monitor`: Activates monitoring of the log file specified in `--log-path`.
- `--current-file [filename]`: If a filename is provided, it specifies an alternate log file to monitor. If no filename is provided, it displays the currently monitored log file. Usage: `--current-file="someotherfile.log"` or `--current-file` to display.
- `--current-folder [path]`: If a path is provided, it sets the default directory for log file monitoring. If no path is provided, it displays the current directory being monitored. Usage: `--current-folder="c:\\temp\\mynewlogfilefolder"` or `--current-folder` to display.

## Server Methods
### start()
Starts the server and begins monitoring the specified log file. It also listens for incoming client connections to send real-time updates.

### stop()
Stops the server and ceases file monitoring and client updates.

### onFileChange(callback)
Registers a callback function that is executed whenever the log file is updated. The callback receives information about the change.

### connectClient(clientId, connectionDetails)
Allows a client to connect to the server using their unique `clientId` and `connectionDetails`, enabling them to receive updates.

### disconnectClient(clientId)
Disconnects a client from the server based on their `clientId` and stops sending them updates.

# Usage within a Python Test Environment
To start the server, use the following command:

## Create a "proto-api" folder
mkdir proto-api

## change directory to your proto-api folder
cd .\proto-api

## Python prototype info
The next step we can create a python test environment for prototyping
from the .\proto-api folder

## Create a virtual environment
python -m venv env

## Activate the python test environment for working on prototype
.\env\Scripts\Activate.ps1

## Start the test.py program which is the Web Hook Server
...\proto-api> .\test.py

## Start the client.py which is the client.py
...\proto-api> .\client.py

## Run the angular app
...\ngUserLevelUp> ng serve

# Modify the log and hit the save button
## Open log.txt and add "new log entry"
echo "new log entry" >> .\proto-api\log.txt

## more complex log entry example
"$date [$guid] Some text log entry" | Out-File -FilePath "C:\src\ulu\ngUserLevelUp\proto-api\log.txt" -Append -Encoding UTF8

