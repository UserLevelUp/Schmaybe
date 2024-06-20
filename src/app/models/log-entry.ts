export class LogEntry {
  constructor(
      public file_path: string,
      public line_number: number,
      public last_line: string,
      public timestamp?: string  // Optional
  ) {}
}
