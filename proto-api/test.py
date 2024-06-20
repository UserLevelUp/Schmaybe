import os
import argparse
import asyncio
import websockets
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import json

class LogEntry:
    def __init__(self, file_path, last_line, line_number, timestamp):
        self.file_path = file_path
        self.last_line = last_line
        self.line_number = line_number
        self.timestamp = timestamp

    # def to_json(self):
    #     return {
    #         "file_path": self.file_path,
    #         "last_line": self.last_line,
    #         "line_number": self.line_number,
    #         "timestamp": self.timestamp
    #     }

class FileChangeHandler(FileSystemEventHandler):
    def __init__(self, notify_function, file_path, loop):
        super().__init__()
        self.notify_function = notify_function
        self.file_path = file_path
        self.loop = loop
        self.last_sent = 0
        self.debounce_seconds = 1

    def read_last_line(self):
        try:
            with open(self.file_path, 'r', encoding='utf-8') as file:
                lines = file.readlines()
                line_count = len(lines)  # Get the total number of lines                
                if lines:
                    last_line = lines[-1].strip()  
                    return last_line, line_count
                else: 
                    return "File is currently empty.", 0
        except FileNotFoundError:
            return "File not found."
        except Exception as e:
            return f"Error reading file: {str(e)}"

    def on_modified(self, event):
        current_time = time.time()
        if event.src_path == self.file_path and (current_time - self.last_sent > self.debounce_seconds):
            last_line, line_number = self.read_last_line()
            if last_line not in ["File is currently empty.", "File not found."]:
                # Create a LogEntry instance
                log_entry = LogEntry(self.file_path, last_line, line_number, current_time)                
                # Convert the LogEntry instance to a JSON string
                message = json.dumps(log_entry.__dict__)
                self.last_sent = current_time
                asyncio.run_coroutine_threadsafe(
                    self.notify_function(message),
                    self.loop
                )
                print(f"Sending message: {message}")
            else:
                print(f"Skipped sending empty or not found message: {last_line}")


# async def notify_clients(message):
#     for websocket in connected_clients:
#         await websocket.send(message)

async def notify_clients(message):
    print(f"Notifying {len(connected_clients)} clients: {message}")
    if not connected_clients:
        print("No connected clients to notify")
    for websocket in connected_clients:
        if websocket.open:
            await websocket.send(message)  # Message is already formatted as JSON
            print("Message sent to client:", message)
        else:
            print("Failed to send message, WebSocket is not open.")

async def handler(websocket, path):
    print("WebSocket client connected.")    
    connected_clients.add(websocket)
    try:
        await websocket.wait_closed()
    finally:
        connected_clients.remove(websocket)
        print("WebSocket client disconnected.")        

async def websocket_server():
    async with websockets.serve(handler, 'localhost', 8765):
        await asyncio.Future()  # Runs indefinitely

async def file_monitor_with_websockets(folder, filename):
    global connected_clients
    connected_clients = set()
    file_path = os.path.join(folder, filename)  # This ensures the path is correctly formed for any OS
    loop = asyncio.get_running_loop()
    event_handler = FileChangeHandler(notify_clients, file_path, loop)
    observer = Observer()
    observer.schedule(event_handler, folder, recursive=False)  # Use recursive=True to monitor all subdirectories
    observer.start()
    await websocket_server()

# Main execution handling as before
async def main():
    parser = argparse.ArgumentParser(description='Test WebSocket Server with Optional File Monitoring')
    parser.add_argument('--monitor', action='store_true', help='Enable file monitoring with WebSocket notifications')
    parser.add_argument('--current-folder', nargs='?', const=True, help='Display or set the current folder')
    parser.add_argument('--current-file', nargs='?', const=True, help='Display or set the file to monitor')
    args = parser.parse_args()

    current_folder = args.current_folder if isinstance(args.current_folder, str) else '.'
    current_file = args.current_file if isinstance(args.current_file, str) else 'log.txt'

    if isinstance(args.current_folder, bool):
        print(f"Current Folder: {os.path.abspath(current_folder)}")
    if isinstance(args.current_file, bool):
        print(f"Current File: {current_file}")

    if args.monitor:
        print(f"Starting file monitoring in {current_folder} for {current_file} with WebSocket notifications...")
        await file_monitor_with_websockets(current_folder, current_file)
    elif not (isinstance(args.current_folder, bool) or isinstance(args.current_file, bool)):
        print("Starting WebSocket server only...")
        await websocket_server()

if __name__ == "__main__":
    asyncio.run(main())
