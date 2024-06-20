import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { WebSocketService } from './services/web-socket-service.service';
import { LogMessageAnalyzerService } from './services/log-message-analyzer.service';
import { Observable } from 'rxjs';
import { LogEntry } from './models/log-entry';

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
      next: (data: LogEntry) => {
       // const data = message as LogEntry;
        console.log(`logentry data: ${JSON.stringify(data)})}`);
        this.snackBar.open(`File: ${data.file_path} line-number: ${data.line_number} updated: ${data.last_line}`, 'Dismiss', {
          verticalPosition: 'top',
        });

        // TODO: check the last Message with data.last_line and determine if it is a new message 70% match

        // TODO: if it is a new message then add it to the logEntries

        // TODO: if the message is not a new message then update the count

        //const { text, labels } = this.messageAnalyzer.analyzeMessage(message);

        this.logEntries.push(data);        
      },
      error: (error) => console.error('WebSocket error:', error),
      complete: () => console.log('WebSocket connection closed'),
    });
  }
}
