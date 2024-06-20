import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-log-card',
  template: `
    <mat-card>
      <mat-card-content>
        <div class="dynamic">{{message}}</div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .dynamic {
      background-color: #FFFF00; /* Or your preferred highlight color */
    }
  `]
})
export class LogCardComponent {
  @Input() message: string = '';
  @Input() labels: string[] = []; // Receive labels from parent
}
