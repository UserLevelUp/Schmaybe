import { TestBed } from '@angular/core/testing';

import { LogMessageAnalyzerService } from './log-message-analyzer.service';

describe('LogMessageAnalyzerService', () => {
  let service: LogMessageAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogMessageAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
