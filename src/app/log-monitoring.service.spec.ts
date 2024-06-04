import { TestBed } from '@angular/core/testing';

import { LogMonitoringService } from './log-monitoring.service';

describe('LogMonitoringService', () => {
  let service: LogMonitoringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogMonitoringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
