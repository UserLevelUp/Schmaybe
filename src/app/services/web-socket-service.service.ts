import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { LogEntry } from '../models/log-entry';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket: WebSocket | null = null;
  private messagesSubject = new Subject<LogEntry>();
  public messages$ = this.messagesSubject.asObservable();

  connect(url: string): void {
    this.socket = new WebSocket(url);
    this.socket.onmessage = (event) => {
      try {
        const data: LogEntry = JSON.parse(event.data);
        this.messagesSubject.next(data);
      } catch (error) {
        console.error("Error parsing JSON from WebSocket message:", error);
      }
    };
    this.socket.onopen = () => console.log("WebSocket connection established.");
    this.socket.onerror = error => console.error("WebSocket error:", error);
    this.socket.onclose = () => console.log("WebSocket connection closed.");
  }
}
