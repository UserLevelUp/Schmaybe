import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  private socket: WebSocket | null = null;
  private messagesSubject = new Subject<string>();
  public messages$ = this.messagesSubject.asObservable();

  constructor() {}

  connect(url: string): void {
    this.socket = new WebSocket(url);
    this.socket.onmessage = (event) => {
      console.log("Message received from WebSocket:", event.data);
      this.messagesSubject.next(event.data);
    };
    this.socket.onopen = () => {
      console.log("WebSocket connection established.");
    };
    this.socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
    this.socket.onclose = () => {
      console.log("WebSocket connection closed.");
    };
  }

  close(): void {
    if (this.socket)
      {
        this.socket.close();
      }
  }
}
