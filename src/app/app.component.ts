import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WebSocketService } from './services/web-socket-service.service';
import { LogMessageAnalyzerService } from './services/log-message-analyzer.service';

interface LogEntry {
  message: string;
  timestamp?: string; // Optional if you have timestamps
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogMessageAnalyzerService], // Add the service to the providers array
})
export class AppComponent implements OnInit {
  logEntries: LogEntry[] = [];
  lastMessage: string = '';  
  constructor(
    private snackBar: MatSnackBar,
    private wsService: WebSocketService,
    private messageAnalyzer: LogMessageAnalyzerService // Inject the service    
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
        message = `File: ${data.file_path} line-number: ${data.line_number} updated: ${data.last_line}`;
        this.snackBar.open(`File: ${data.file_path} line-number: ${data.line_number} updated: ${data.last_line}`, 'Dismiss', {
          verticalPosition: 'top',
        });
        const { text, labels } = this.messageAnalyzer.analyzeMessage(message);
        this.logEntries.push({ message: text, timestamp: new Date().toISOString()});        
      },
      error: (error) => console.error('WebSocket error:', error),
      complete: () => console.log('WebSocket connection closed'),
    });
  }
}
