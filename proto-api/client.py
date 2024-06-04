import asyncio
import websockets
import json

async def listen_for_updates():
    uri = "ws://localhost:8765"
    async with websockets.connect(uri) as websocket:
        print("Connected to WebSocket server")
        while True:
            message = await websocket.recv()  # Wait for any messages from the server
            data = json.loads(message)            
            print(f"Received update for file {data['file_path']}: {data['line_number']} {data['last_line']}")

asyncio.run(listen_for_updates())