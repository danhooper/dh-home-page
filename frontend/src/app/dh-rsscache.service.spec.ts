import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { DhRSSCacheService } from './dh-rsscache.service';

describe('DhRSSCache Service', () => {
  beforeEachProviders(() => [DhRSSCacheService]);

  it('should ...',
      inject([DhRSSCacheService], (service: DhRSSCacheService) => {
    expect(service).toBeTruthy();
  }));
});
