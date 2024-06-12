import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogMessageAnalyzerService {
  private readonly localStorageKey = 'lastMessage'; // Key for local storage

  analyzeMessage(message: string): { text: string, labels: string[] } {
    const lastMessage = localStorage.getItem(this.localStorageKey) || '';
    localStorage.setItem(this.localStorageKey, message); // Update for next comparison

    let labels: string[] = [];
    let outputText = '';

    const minLength = Math.min(message.length, lastMessage.length);

    for (let i = 0; i < message.length; i++) {
      if (i < minLength && message[i] === lastMessage[i]) {
        outputText += message[i];
        labels.push('static');
      } else {
        //outputText += '{param}';
        labels.push('dynamic');
      }
    }

    return { text: outputText, labels };
  }
}
