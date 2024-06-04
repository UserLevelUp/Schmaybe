import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WebSocketService } from './services/web-socket-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private snackBar: MatSnackBar,
    private wsService: WebSocketService
  ) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000, // Adjust duration as needed
    });
  }

  ngOnInit(): void {
    this.wsService.connect('ws://localhost:8765');
    this.wsService.messages$.subscribe({
      next: (message: any) => {
        console.log(typeof message, message); // This will log the type and content of the message
        const data = (typeof message === 'string') ? JSON.parse(message) : message;
        this.snackBar.open(`File ${data.file_path} line-number: ${data.line_number} updated: ${data.last_line}`, 'Dismiss', {
          verticalPosition: 'top',
        });
      },
      error: (error) => console.error('WebSocket error:', error),
      complete: () => console.log('WebSocket connection closed'),
    });
  }
}
